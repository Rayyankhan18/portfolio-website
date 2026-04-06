"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Disc as Discord } from "lucide-react";

const socialMap = [
    { char: "C", icon: <Github size={20} />, href: "https://github.com/Rayyankhan18" },
    { char: "O", icon: <Twitter size={20} />, href: "https://twitter.com" },
    { char: "N", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/rayyan-khan" },
    { char: "T", icon: <Instagram size={20} />, href: "https://instagram.com" },
    { char: "A", icon: <Facebook size={20} />, href: "https://facebook.com" },
    { char: "C", icon: <Mail size={20} />, href: "mailto:rayyanbusinessofficial@gmail.com" },
    { char: "T", icon: <Discord size={20} />, href: "https://discord.com" }
];

export default function SocialFlipButton() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    padding: "12px",
                    backgroundColor: "#000",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
            >
                {socialMap.map((item, index) => (
                    <FlipKey
                        key={index}
                        item={item}
                        index={index}
                        isFlipped={isFlipped}
                    />
                ))}
            </div>
        </div>
    );
}

const FlipKey = ({ item, index, isFlipped }: { item: any; index: number; isFlipped: boolean }) => {
    return (
        <div
            style={{
                position: "relative",
                width: "48px",
                height: "48px",
                perspective: "1000px",
            }}
        >
            <motion.div
                initial={false}
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Front Face - Letter */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        backgroundColor: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        fontFamily: "var(--font-sans)",
                    }}
                >
                    {item.char}
                </div>

                {/* Back Face - Icon */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                        backgroundColor: "#6E56CF",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                    }}
                >
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            color: "inherit",
                        }}
                    >
                        {item.icon}
                    </a>
                </div>
            </motion.div>
        </div>
    );
};
