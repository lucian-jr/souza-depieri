"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

/**
 * Registers every GSAP plugin used by the site exactly once.
 * Import `gsap` (and plugins) from this module in client components, never directly from
 * "gsap", so registration is guaranteed.
 */
gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

export { gsap, ScrollTrigger, Draggable, useGSAP };
