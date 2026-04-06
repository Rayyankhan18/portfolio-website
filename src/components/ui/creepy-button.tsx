"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

interface CreepyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}



export const CreepyButton = ({ children, onClick, ...props }: CreepyButtonProps) => {
    const eyesRef = useRef<HTMLSpanElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for smooth tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const eyeX = useSpring(mouseX, springConfig);
    const eyeY = useSpring(mouseY, springConfig);

    // Transform normalized coordinates (-1 to 1) to specific CSS transforms
    // Moving pupils: standard translate range
    const pupilX = useTransform(eyeX, (val) => `calc(-50% + ${val * 15}px)`);
    const pupilY = useTransform(eyeY, (val) => `calc(-50% + ${val * 15}px)`);

    // Optional: Subtle movement of the whole eye container for extra depth
    const containerX = useTransform(eyeX, (val) => val * 5);
    const containerY = useTransform(eyeY, (val) => val * 5);

    const updateEyes = (e: React.MouseEvent | React.TouchEvent) => {
        const userEvent =
            "touches" in e
                ? (e as React.TouchEvent).touches[0]
                : (e as React.MouseEvent);

        if (!eyesRef.current) return;

        const eyesRect = eyesRef.current.getBoundingClientRect();
        const eyesCenter = {
            x: eyesRect.left + eyesRect.width / 2,
            y: eyesRect.top + eyesRect.height / 2,
        };

        const cursor = { x: userEvent.clientX, y: userEvent.clientY };

        // Calculate vector from eyes to cursor
        const dx = cursor.x - eyesCenter.x;
        const dy = cursor.y - eyesCenter.y;

        // Normalize direction
        const distance = Math.hypot(dx, dy);
        const maxDistance = 200; // Pixels at which eyes are fully rotated
        const boundedDist = Math.min(distance, maxDistance);

        // Calculate normalized position (-1 to 1)
        const angle = Math.atan2(dy, dx);
        const force = boundedDist / maxDistance;

        const x = Math.cos(angle) * force;
        const y = Math.sin(angle) * force;

        mouseX.set(x);
        mouseY.set(y);
    };

    const resetEyes = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    const pupilStyle: any = {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "0.25em",
        height: "0.25em",
        backgroundColor: "#000",
        borderRadius: "9999px",
        x: pupilX,
        y: pupilY,
    };

    const eyeStyle: React.CSSProperties = {
        position: "relative",
        width: "0.65em",
        height: "0.65em",
        backgroundColor: "#fff",
        borderRadius: "9999px",
        overflow: "hidden",
        display: "block",
        boxShadow: "inset 0 0 4px rgba(0,0,0,0.2)",
    };

    return (
        <button
            style={{
                position: "relative",
                minWidth: "9em",
                borderRadius: "12px",
                backgroundColor: "#000",
                cursor: "pointer",
                outline: "none",
                userSelect: "none",
                border: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
            }}
            onClick={onClick}
            onMouseMove={(e) => {
                updateEyes(e);
                setIsHovered(true);
            }}
            onTouchMove={updateEyes}
            onMouseLeave={resetEyes}
            {...props}
        >
            {/* Eyes Container */}
            <motion.span
                ref={eyesRef}
                style={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5em",
                    right: "1.5em",
                    bottom: "0.75em",
                    zIndex: 0,
                    pointerEvents: "none",
                    x: containerX,
                    y: containerY,
                }}
            >
                {/* Left Eye */}
                <motion.span
                    style={{ ...eyeStyle, width: "1.1em", height: "1.1em" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    {/* Random blinking handled by parent or separate component, 
                         but for now we keep the CSS/framer loop if we want blinking */}
                    <motion.span
                        style={{ ...pupilStyle, width: "0.45em", height: "0.45em" }}
                    />
                </motion.span>

                {/* Right Eye */}
                <motion.span
                    style={{ ...eyeStyle, width: "1.1em", height: "1.1em" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.span
                        style={{ ...pupilStyle, width: "0.45em", height: "0.45em" }}
                    />
                </motion.span>
            </motion.span>

            {/* Cover (the visible button face) */}
            <motion.span
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    backgroundColor: "#6E56CF",
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "-0.02em",
                    padding: "0.5rem 1.5rem",
                    transformOrigin: "bottom left",
                }}
                animate={{
                    rotate: isHovered ? -12 : 0,
                    y: isHovered ? -4 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.span>

            {/* Invisible spacer to maintain size */}
            <span
                style={{
                    display: "block",
                    opacity: 0,
                    padding: "0.5rem 1.5rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                }}
            >
                {children}
            </span>
        </button>
    );
};

export default CreepyButton;
