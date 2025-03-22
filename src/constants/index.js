import { sig, pennmed, penn, witg, palantir, meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car, tdwebsite, mesh,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    java,
    cpp,
    opengl,
    pytorch,
    tensorflow,
    scikitlearn,
    postgresql,
    flask,
    pandas,
    qt,
    ocaml,
    aws,
    docker,
    scene_graph,
    postprocessing
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Versatile",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Versatile",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Versatile",
    },
    {
        imageUrl: opengl,
        name: "OpenGL",
        type: "Graphics",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "Machine Learning",
    },
    {
        imageUrl: scikitlearn,
        name: "Scikit Learn",
        type: "Machine Learning",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Machine Learning",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Analysis",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: qt,
        name: "Qt Creator",
        type: "Graphics",
    },
    {
        imageUrl: ocaml,
        name: "OCaml",
        type: "Functional",
    }, 
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud",
    }
];

export const experiences = [
    {
        title: "Undergraduate Student Researcher",
        company_name: "Penn Medicine",
        icon: pennmed,
        iconBg: "#accbe1",
        date: "April 2024 - Present",
        points: [
            "Selected as one of two undergraduate students to participate in the multimodal AI for organ segmentation project under Professor Hersh Sagreiya",
            "Proposed and engineered an AI-based organ segmentation model from CT to PET-CT, using PyTorch, TotalSegmentator, and Advanced Normalization Tools (ANTs), achieving a Dice score of 0.8 with the nnUNET model using Penn Medicine high-performance computing (HPC) resources",
            "Currently analyzing chemotherapy efficacy in lymphoma patients by tracking changes in Standardized Uptake Value (SUV) using segmented PET-CT scans to provide insights into treatment effectivenesss",
        ],
    },
    {
        title: "Math and Computer Science Tutor",
        company_name: "University of Pennsylvania",
        icon: penn,
        iconBg: "#fbc3bc",
        date: "May 2024 - Present",
        points: [
            "Work with small groups of tutees in CIS 1210 (Data Structures and Algorithms) and MATH 2400 (Linear Algebra) to assist in the learning of content knowledge",
            "Cover a range of algorithmic concepts, including sorting algorithms, graph algorithms (DAGs, SCCs, shortest path, minimum spanning tree), and data structures such as AVL trees.",
            "Develop and customize practice problems and interactive exercises tailored to address common student challenges in introductory algorithms.",
        ],
    },
    {
        title: "Quantitative Investment Strategies (QIS) Committee Member",
        company_name: "Wharton Investment and Trading Group",
        icon: witg,
        iconBg: "#b7e4c7",
        date: "Oct 2024 - Present",
        points: [
            "Participate in prestigious trading competitions—such as the UChicago Trading Competition—to test our strategies under real-world market conditions.",
            "Engage in market making simulations and quantitative trading games like Figgie and Liar's Game to analyze liquidity, optimize order execution, and enhance risk management techniques.",   
        ],
    },
    {
        title: "Palantir Launch Participant",
        company_name: "Palantir Technologies",
        icon: palantir,
        iconBg: "#000000",
        date: "April 2025",
        points: [
            "Selected as one of 70 top students nationwide to join Palantir's fully paid, one-week, highly competitive Launch Program, gaining hands-on experience in deploying AI-driven solutions",
            "Designed and deployed a week-long client-focused project in Foundry and AIP (OSDK), identifying inefficiencies and automating workflows",
            "Delivered a final presentation and live demo to Palantir engineers and industry professionals to highlight project’s technical impact and real-world applications"
        ],
    },
    {
        title: "SIG Sophomore Discovery Day Program Participant",
        company_name: "Susquehanna International Group",
        icon: sig,
        iconBg: "#a2d2ff",
        date: "March 2025",
        points: [
            "Selected from a competitive pool of undergraduates to participate in SIG’s fully paid, 2-day Sophomore Discovery program designed to introduce students to quantitative trading.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: contact,
        link: 'mailto: baileykoo0305@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Lawliet7129',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bailey-koo-a24840229/',
    }
];

export const projects = [
    {
        name: "Scene Graph-Based (not so) Humanoid Puppet 🍾",
        description: "A scene graph-based system for hierarchical transformations and interactive manipulation of a humanoid puppet using Qt and OpenGL. The system is built upon a Node class hierarchy that facilitates structured transformations such as translation, rotation, and scaling.",
        iconUrl: scene_graph,
        videoUrl: "/videos/scene_graph.mp4",
        repoUrl: "",
        privateRepoNote: "Private repository — available upon request.",
        theme: "graphics",
      },
      {
        name: "3D Portfolio Website",
        description: "A visually engaging 3D interactive portfolio showcasing my work in quantitative finance, software engineering, and computer graphics. The site features an intuitive, interactive environment where users can explore my projects in a dynamic, spatial setting.",
        iconUrl: tdwebsite,
        videoUrl: "/videos/3dwebsite.mp4", 
        repoUrl: "",
        privateRepoNote: "Private repository — available upon request.",
        theme: "fullstack",
      },
      {
        name: "Interactive 3D Rendering & Post-Processing Effects",
        description: "Real-time rendering with advanced camera control and shader programming. The Polar Spherical Camera Model enables Maya-like 3D manipulation via rotation, panning, and zooming. The shader suite delivers Blinn-Phong highlights, Matcap materials, and time-driven vertex deformations, while post-processing includes Sobel, Gaussian blur, and noise-based UV warping.",
        iconUrl: postprocessing,
        videoUrl: "/videos/post_processing.mp4", 
        repoUrl: "",
        privateRepoNote: "Private repository — available upon request.",
        theme: "btn-back-red",
      },
      {
        name: "Half-Edge Mesh Editor & Catmull-Clark Subdivision",
        description: "Built a real-time mesh editor from scratch using C++, OpenGL, and Qt. Implemented a full half-edge data structure to support mesh construction, OBJ import, and advanced GUI-based selection. Added Catmull-Clark subdivision for smoothing and interactive visualization with custom shader rendering.",
        iconUrl: mesh,
        videoUrl: "/videos/mesh-project.mp4", 
        repoUrl: "",
        privateRepoNote: "Private repository — available upon request.",
        theme: "graphics",
      }
];