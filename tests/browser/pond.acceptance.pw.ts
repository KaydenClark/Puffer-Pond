import { test, expect, type Page } from '@playwright/test'

const viewports = {
  desktop: { width: 1536, height: 1024 },
  phone: { width: 390, height: 844 },
  oddWindow: { width: 1100, height: 460 },
}

async function expectNoViewportOverflow(page: Page) {
  const geometry = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    documentWidth: document.documentElement.scrollWidth,
    documentHeight: document.documentElement.scrollHeight,
    bodyWidth: document.body.scrollWidth,
    bodyHeight: document.body.scrollHeight,
  }))

  expect(geometry.documentWidth).toBeLessThanOrEqual(geometry.innerWidth)
  expect(geometry.documentHeight).toBeLessThanOrEqual(geometry.innerHeight)
  expect(geometry.bodyWidth).toBeLessThanOrEqual(geometry.innerWidth)
  expect(geometry.bodyHeight).toBeLessThanOrEqual(geometry.innerHeight)
}

for (const [name, viewport] of Object.entries({
  desktop: viewports.desktop,
  phone: viewports.phone,
})) {
  test(`${name} viewport has no horizontal or vertical overflow`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto('/?visitor=ducks')

    await expect(page.locator('.pond')).toBeVisible()
    await expectNoViewportOverflow(page)
  })
}

test('phone controls toggle state, meet touch geometry, and do not create ripples', async ({ page }) => {
  await page.setViewportSize(viewports.phone)
  await page.goto('/')

  const sound = page.getByRole('button', { name: 'Play pond sounds' })
  const night = page.getByRole('button', { name: 'Switch to night' })
  for (const control of [sound, night]) {
    const box = await control.boundingBox()
    expect(box, 'control should have measurable geometry').not.toBeNull()
    expect(box!.width).toBeGreaterThanOrEqual(44)
    expect(box!.height).toBeGreaterThanOrEqual(44)
  }

  await expect(sound).toHaveAttribute('aria-pressed', 'false')
  await sound.click()
  await expect(page.getByRole('button', { name: 'Mute pond sounds' })).toHaveAttribute('aria-pressed', 'true')

  await expect(night).toHaveAttribute('aria-pressed', 'false')
  await night.click()
  await expect(page.getByRole('button', { name: 'Switch to day' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.ripple')).toHaveCount(0)

  const pond = page.locator('.pond')
  const pondBox = await pond.boundingBox()
  expect(pondBox, 'pond should have measurable geometry').not.toBeNull()
  await pond.click({
    position: {
      x: pondBox!.width * 0.5,
      y: pondBox!.height * 0.7,
    },
  })
  await expect(page.locator('.ripple')).toHaveCount(1)
})

test('reduced motion keeps a visible stationary pond and duck composition', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.setViewportSize(viewports.desktop)
  await page.goto('/?visitor=ducks')

  const pond = page.locator('.pond')
  const ducks = page.locator('.duck-visit')
  await expect(pond).toBeVisible()
  await expect(ducks).toBeVisible()
  await expect(ducks).toHaveCSS('animation-name', 'none')

  const before = await ducks.boundingBox()
  await page.waitForTimeout(150)
  const after = await ducks.boundingBox()
  expect(before, 'duck composition should have measurable geometry').not.toBeNull()
  expect(after).toEqual(before)

  await page.screenshot({
    path: 'docs/browser-acceptance.jpg',
    animations: 'disabled',
    quality: 82,
    type: 'jpeg',
  })
})

test('forced dogs stay above the responsive shoreline at the odd-window seam', async ({ page }) => {
  await page.setViewportSize(viewports.oddWindow)
  await page.goto('/?visitor=dogs')
  await page.addStyleTag({ content: '.dogs { animation: none !important; opacity: 1 !important; transform: none !important; }' })

  const pondBox = await page.locator('.pond').boundingBox()
  const dogs = page.locator('.dogs')
  await expect(dogs).toBeVisible()
  const dogsBox = await dogs.boundingBox()
  expect(pondBox, 'pond should have measurable geometry').not.toBeNull()
  expect(dogsBox, 'dogs should have measurable geometry').not.toBeNull()

  const dogsBottom = dogsBox!.y + dogsBox!.height
  const responsiveShorelineLimit = pondBox!.y + pondBox!.height * 0.55
  expect(dogsBottom).toBeLessThanOrEqual(responsiveShorelineLimit)
  await expectNoViewportOverflow(page)
})
