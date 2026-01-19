# The Story Behind Redisplay

## The Origin

The idea for Redisplay was born from a simple need: enabling an elderly woman to have easier access to technology and allowing her family to share pictures with her. This personal challenge sparked the initial concept—a way to bridge the digital divide and keep families connected through technology that's accessible and easy to use.

## Ethical and Philosophical Reasons

At its core, Redisplay is about regaining ownership of technology, avoiding waste, and repurposing still-good pieces of hardware into something useful. This project delivers a similar service to Alexa or Google Nest, with the main difference being that it's free, open-source, and annoyance-free.

Yes, (for now) you cannot talk to it, but you are not given ads, you are not listened to, and you *control* it. Not every service should always be provided by big tech corporations. It is possible, for once, to put in some effort, avoid the convenience of pre-packaged solutions, and obtain a little tool that is completely owned and transparent.

## Version 1: The Raspberry Pi Approach

The first version of Redisplay used a Raspberry Pi connected to a display with cables and a kiosk browser. While functional, this solution was complex, expensive, and quite heavy for the minimal usage it provided. The hardware requirements and setup complexity made it less than ideal for the target use case.

## Version 2: Moving to Android

Recognizing the limitations of the first approach, Redisplay evolved to use Android devices with a native app. The key insight was that older devices do not support modern browsers, and the main target of this project are old devices that people already have sitting unused. By building a native Android application, Redisplay can run on devices dating back to Android 4, dramatically expanding the range of compatible hardware.

## Why Native Over Browser

The decision to build a native app guarantees better performance on older hardware. While this means compromising on a possible all-in-one browser-based solution with HTML rendering, it achieves a much wider spectrum of device compatibility. This trade-off ensures that even the oldest Android devices can run Redisplay smoothly, giving them a new lease on life.

## An AI-Assisted Experiment

This whole project is also an experiment in modern software development: Redisplay was built almost entirely with AI support, under the guidance of a veteran developer with over 25 years of experience. This collaboration between human expertise and AI assistance demonstrates how new tools can accelerate development while maintaining quality and best practices.

## Open Source by Design

From the beginning, Redisplay was built to be open-source. Not just because it's the right thing to do, but because sustainability and innovation thrive in communities. By making the code freely available, we enable others to customize, improve, and extend Redisplay in ways we never imagined. Every contribution, whether it's code, documentation, or ideas, makes the project better for everyone.
