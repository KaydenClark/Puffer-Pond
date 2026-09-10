# Puffer Pond - Blueprint

## Product Destination

Puffer Pond is a responsive ambient website that fills a phone or desktop with
a quiet illustrated habitat. A family of five pea puffers explores the water
among snails, grasses and driftwood. The pond is pleasant to leave open.

## People And Problems Served

People who want a small moment of calm can open the pond without an account,
setup or attention-demanding interaction. The whole experience fits the screen.

## Promised Outcomes

The pond feels alive through gentle distinct movement. Underwater creatures
stay below the waterline. People requesting reduced motion enjoy the same
composition with animation paused.

## Desired Experience And Behavior

Opening the site reveals the whole scene. It remains legible in portrait and
landscape, on phones and desktops, without scrolling. Motion stays calm rather
than competitive or distracting.

## Integrated System Design

A static page combines an illustrated environment with independently positioned
puffers and snails. A small scene model supplies bounded positions and movement
preferences. Browser-native rendering keeps the product portable and simple.
The [static runtime decision](workbench/docs/adr/0002-puffer-proof-runtime.md)
explains the chosen constraints.

## Cross-Cutting Qualities And Constraints

The experience needs no backend, accounts, analytics, remote fonts or personal
data. Artwork retains its license attribution. Responsive layout, clear
waterline boundaries and respect for reduced motion apply throughout.

## Desired Lifecycle

The pond can be built and checked locally, then served as static files. Small
changes carry behavior tests and visual checks at desktop and phone sizes.
Project controls and saved working context let another agent continue safely;
publication follows the owner's explicit destination decision.

## Non-Goals

The product is not an aquarium simulation or game. Feeding, scores, progression,
accounts, persistence, audio, night mode and rare visitors are outside this
bounded pond destination.
