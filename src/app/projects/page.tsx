import Layout from '@/components/layout';
import ProjectsContainer from '@/components/projects/projectsContainer/page';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Projects',
    description: '...',
}

export default function Projects() {
    return (

        <Layout>
          <ProjectsContainer />
        </Layout>
    )
}
