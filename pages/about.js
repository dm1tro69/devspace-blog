import React from 'react';
import Layout from "../compnents/Layout";

const AboutPage = () => {
    return (
        <Layout>
            <h1 className="text-5xl border-b-4 pb-5 font-bold">
                About
            </h1>
            <div className="bg-white shadow-md rounder-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5">DevSpace Blog</h3>
                <p className="mb-3">
                    This is a blog built with Next.js and Markdown
                </p>
                <p>
                    <span className="font-bold">Version 1.0.0</span>
                </p>
            </div>
        </Layout>
    );
};

export default AboutPage;
