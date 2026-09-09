import {useId} from 'react';

import styles from './FunnelIllustration.module.css';

interface FunnelIllustrationProps {
    className?: string;
    title?: string;
}

const BARS = [
    {x: 32, y: 28, height: 120, top: 48},
    {x: 88, y: 52, height: 96, top: 38},
    {x: 144, y: 76, height: 72, top: 30},
    {x: 200, y: 100, height: 48, top: 22},
] as const;

const GHOST_OFFSET_X = 14;
const GHOST_OFFSET_Y = -12;

export function FunnelIllustration({className, title = 'Воронка'}: FunnelIllustrationProps) {
    const clipId = useId().replace(/:/g, '');
    return (
        <svg
            className={[styles.root, className].filter(Boolean).join(' ')}
            width="256"
            height="176"
            viewBox="0 0 256 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
        >
            <title>{title}</title>
            {BARS.map((bar) => (
                <rect
                    key={`ghost-${bar.x}`}
                    x={bar.x + GHOST_OFFSET_X}
                    y={bar.y + GHOST_OFFSET_Y}
                    width="34"
                    height={bar.height + 10}
                    rx="2"
                    fill="#E4E7EE"
                />
            ))}
            {BARS.map((bar) => (
                <g key={`bar-${bar.x}`}>
                    <clipPath id={`funnel-bar-${clipId}-${bar.x}`}>
                        <rect x={bar.x} y={bar.y} width="34" height={bar.height} rx="2" />
                    </clipPath>
                    <g clipPath={`url(#funnel-bar-${clipId}-${bar.x})`}>
                        <rect x={bar.x} y={bar.y} width="34" height={bar.height} fill="#2B3B66" />
                        <rect x={bar.x} y={bar.y} width="34" height={bar.top} fill="#4F7CF0" />
                    </g>
                </g>
            ))}
        </svg>
    );
}
