import Head from 'next/head'
import React from 'react';

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}
