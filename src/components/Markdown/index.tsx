import ReactMarkdown from "react-markdown";
import {Link} from "@tanstack/react-router";
import type {Components} from "react-markdown";
import type {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

type MarkdownProps = {
    children: string;
}

const components: Components = {
    a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
        <Link className="text-primary hover:text-secondary" to={props.href}>{props.children}</Link>
    ),
};

export default function Markdown({children}: MarkdownProps) {
    return (
        <ReactMarkdown components={components}>
            {children}
        </ReactMarkdown>
    )
}