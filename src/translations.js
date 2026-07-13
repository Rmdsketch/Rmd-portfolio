const translations = {
    id: {
        nav: {
            home: "Beranda",
            about: "Tentang",
            skills: "Keahlian",
            projects: "Proyek",
            experience: "Pengalaman",
            contact: "Kontak",
        },

        hero: {
            greeting: "Halo, saya",
            name: "Muhamad Ramadani",
            roles: [
                "AI Engineer",
                "Machine Learning Engineer",
                "Computer Vision Engineer",
                "MLOps Engineer",
            ],
            tagline:
                "Fresh Graduate Informatika yang antusias membangun sistem AI end-to-end, mulai dari pelatihan model hingga integrasi ke dalam aplikasi web full-stack yang scalable.",
            ctaPrimary: "Resume",
            ctaSecondary: "Hubungi Saya",
        },

        about: {
            title: "Tentang Saya",
            description:
                "Saya adalah lulusan baru Informatika dengan minat besar pada Artificial Intelligence, Machine Learning, Deep Learning, dan Computer Vision. Saya memiliki pengalaman membangun sistem AI end-to-end dengan mengintegrasikan model machine learning ke dalam aplikasi web full-stack yang scalable menggunakan PyTorch, YOLO, FastAPI, React, WebSocket, Docker, dan Git.",
            focusTitle: "Fokus Karier",
            focusDescription:
                "Saat ini saya mencari kesempatan sebagai AI Engineer, Machine Learning Engineer, Computer Vision Engineer atau MLOps Engineer untuk mengembangkan solusi AI yang scalable, siap produksi, dan memberikan dampak nyata di dunia industri.",
            highlights: [
                "Data Preprocessing & Model Training",
                "Model Evaluation & Deployment",
                "REST API Development",
                "Real-time Inference",
                "Frontend Integration",
                "Containerization & Version Control",
            ],
        },

        skills: {
            title: "Keahlian Teknis",
            categories: {
                aiMl: {
                    title: "AI & Machine Learning",
                    items: [
                        "PyTorch",
                        "YOLO (Object Detection)",
                        "Deep Learning",
                        "Computer Vision",
                        "Model Training & Evaluation",
                        "Model Deployment",
                    ],
                },
                webDev: {
                    title: "Web Development",
                    items: [
                        "FastAPI",
                        "React",
                        "WebSocket",
                        "REST API Development",
                        "Real-time Inference Integration",
                    ],
                },
                toolsDevOps: {
                    title: "Tools & DevOps",
                    items: ["Docker", "Git", "Containerization", "Version Control"],
                },
            },
        },

        experience: {
            title: "Pengalaman & Kompetensi",
            competenceTitle: "Kompetensi",
            internshipTitle: "Pengalaman",
            summary:
                "Berpengalaman merancang dan membangun sistem AI end-to-end — mulai dari preprocessing data, pelatihan dan evaluasi model, hingga deployment model ke dalam aplikasi web production-ready dengan integrasi inferensi real-time.",
            competenceItems: [
                {
                    role: "AI/ML System Development",
                    description:
                        "Mengintegrasikan model machine learning ke dalam aplikasi web full-stack yang scalable.",
                },
                {
                    role: "Model Training & Evaluation",
                    description:
                        "Melakukan preprocessing data, pelatihan model, serta evaluasi performa model secara menyeluruh.",
                },
                {
                    role: "Deployment & Real-time Inference",
                    description:
                        "Melakukan deployment model dan membangun sistem inferensi real-time menggunakan WebSocket dan FastAPI.",
                }
            ],
            internshipItems: [
                {
                    role: "Akademi AWS AI",
                    comp: "Dicoding Indonesia",
                    dur: "Apr 2026 - Saat ini · 4 bln | Bandung, Jawa Barat, Indonesia · Remote",
                    description: "Berpartisipasi dalam AWS AI Academy pada tahun 2026, sebuah program pembelajaran terstruktur yang berfokus pada Kecerdasan Buatan, Komputasi Awan, Pembelajaran Mesin, dan AI Generatif.\nArea pembelajaran utama:\n- Pemrograman Python\n- Dasar-dasar Komputasi Awan di AWS\n- Dasar-dasar Pembelajaran Mesin\n- Konsep dan Aplikasi AI Generatif"
                },
                {
                    role: "AI Mini Camp",
                    comp: "Dicoding Indonesia",
                    dur: "Jun 2026 · 1 bln",
                    description: "Berpartisipasi dalam AI Mini Camp pada tahun 2026, sebuah program pembelajaran terstruktur yang berfokus pada Kecerdasan Buatan dan AI Generatif melalui kursus terpandu dan latihan praktis.\nArea pembelajaran utama:\n- Dasar-dasar Kecerdasan Buatan\n- Konsep dan Aplikasi AI Generatif\n- Rekayasa Prompt\n- Produktivitas Berbantuan AI dan Otomatisasi Alur Kerja\n- Aplikasi AI Praktis untuk Pemecahan Masalah Dunia Nyata"
                },
                {
                    role: "Asisten Laboratorium",
                    comp: "Universitas Jenderal Achmad Yani Yogyakarta",
                    dur: "Feb 2026 - Jun 2026 · 5 bln | Gamping, Daerah Istimewa Yogyakarta, Indonesia · On-site",
                    description: "Membantu sebagai Asisten Laboratorium dan mengevaluasi tugas mingguan mahasiswa."
                },
                {
                    role: "Badan Ekraf Digital Talent (BDT)",
                    comp: "Baparekraf Digital Talent",
                    dur: "Apr 2026 - Mei 2026 · 2 bln | Jakarta, Indonesia · Remote",
                    description: "Terpilih sebagai penerima beasiswa program Badan Ekraf Digital Talent (BDT) 2026, inisiatif Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf/Baparekraf) bekerja sama dengan Dicoding Indonesia. Program ini berfokus pada peningkatan kapasitas talenta kreatif digital Indonesia, khususnya dalam pengembangan AI."
                },
                {
                    role: "Magang Pengembang Perangkat Lunak (Front-End)",
                    comp: "PT. MITECH GROUP ASIA",
                    dur: "Agt 2025 - Okt 2025 · 3 bln | Sukoharjo, Jawa Tengah, Indonesia · On-site",
                    description: "- Mengembangkan antarmuka front-end untuk aplikasi Autoads Dashboard menggunakan Ionic Framework untuk memastikan pengalaman yang responsif dan ramah pengguna.\n- Mengintegrasikan aplikasi front-end secara mulus dengan Firebase sebagai sistem back-end untuk manajemen data real-time.\n- Mengelola alur data ujung-ke-ujung antara antarmuka pengguna dan basis data untuk memastikan kinerja aplikasi yang lancar."
                }
            ],
        },

        projects: {
            title: "Proyek",
            viewProject: "Lihat Proyek",
            viewCode: "Lihat Kode",
            technologies: "Teknologi",
        },

        contact: {
            title: "Hubungi Saya",
            description:
                "Terbuka untuk kesempatan sebagai AI Engineer, Machine Learning Engineer, Computer Vision Engineer, atau MLOps Engineer. Jangan ragu untuk menghubungi saya.",
            form: {
                name: "Nama",
                email: "Email",
                message: "Pesan",
                send: "Kirim Pesan",
            },
            emailLabel: "Email",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
        },

        footer: {
            rights: "Seluruh hak cipta dilindungi.",
        },
    },

    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        hero: {
            greeting: "Hello, I'm",
            name: "Muhamad Ramadani",
            roles: [
                "AI Engineer",
                "Machine Learning Engineer",
                "Computer Vision Engineer",
                "MLOps Engineer",
            ],
            tagline:
                "Fresh Graduate in Informatics passionate about building end-to-end AI systems, from model training to integration into scalable full-stack web applications.",
            ctaPrimary: "Resume",
            ctaSecondary: "Contact Me",
        },

        about: {
            title: "About Me",
            description:
                "Fresh Graduate in Informatics passionate about Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision. Experienced in building end-to-end AI systems by integrating machine learning models into scalable full-stack web applications using PyTorch, YOLO, FastAPI, React, WebSocket, Docker and Git.",
            focusTitle: "Career Focus",
            focusDescription:
                "Currently seeking opportunities as an AI Engineer, Machine Learning Engineer, Computer Vision Engineer, or MLOps Engineer to develop scalable, production-ready AI solutions that deliver real-world impact.",
            highlights: [
                "Data Preprocessing & Model Training",
                "Model Evaluation & Deployment",
                "REST API Development",
                "Real-time Inference",
                "Frontend Integration",
                "Containerization & Version Control",
            ],
        },

        skills: {
            title: "Technical Skills",
            categories: {
                aiMl: {
                    title: "AI & Machine Learning",
                    items: [
                        "PyTorch",
                        "YOLO (Object Detection)",
                        "Deep Learning",
                        "Computer Vision",
                        "Model Training & Evaluation",
                        "Model Deployment",
                    ],
                },
                webDev: {
                    title: "Web Development",
                    items: [
                        "FastAPI",
                        "React",
                        "WebSocket",
                        "REST API Development",
                        "Real-time Inference Integration",
                    ],
                },
                toolsDevOps: {
                    title: "Tools & DevOps",
                    items: ["Docker", "Git", "Containerization", "Version Control"],
                },
            },
        },

        experience: {
            title: "Experience & Expertise",
            competenceTitle: "Expertise",
            internshipTitle: "Experience",
            summary:
                "Experienced in designing and building end-to-end AI systems — from data preprocessing, model training and evaluation, to deploying models into production-ready web applications with real-time inference integration.",
            competenceItems: [
                {
                    role: "AI/ML System Development",
                    description:
                        "Integrating machine learning models into scalable full-stack web applications.",
                },
                {
                    role: "Model Training & Evaluation",
                    description:
                        "Performing data preprocessing, model training, and comprehensive model performance evaluation.",
                },
                {
                    role: "Deployment & Real-time Inference",
                    description:
                        "Deploying models and building real-time inference systems using WebSocket and FastAPI.",
                }
            ],
            internshipItems: [
                {
                    role: "AWS AI Academy",
                    comp: "Dicoding Indonesia",
                    dur: "Apr 2026 - Present · 4 mos | Bandung, West Java, Indonesia · Remote",
                    description: "Participated in the AWS AI Academy in 2026, a structured learning program focused on Artificial Intelligence, Cloud Computing, Machine Learning and Generative AI.\nKey learning areas:\n- Python Programming\n- Cloud Computing Fundamentals on AWS\n- Machine Learning Fundamentals\n- Generative AI Concepts and Applications"
                },
                {
                    role: "AI Mini Camp",
                    comp: "Dicoding Indonesia",
                    dur: "Jun 2026 · 1 mo | Bandung, West Java, Indonesia · Remote",
                    description: "Participated in the AI Mini Camp in 2026, a structured learning program focused on Artificial Intelligence and Generative AI through guided coursework and practical exercises.\nKey learning areas:\n- Artificial Intelligence Fundamentals\n- Generative AI Concepts and Applications\n- Prompt Engineering\n- AI-Assisted Productivity and Workflow Automation\n- Practical AI Applications for Real-World Problem Solving"
                },
                {
                    role: "Laboratory Assistant",
                    comp: "Jenderal Achmad Yani Yogyakarta University",
                    dur: "Feb 2026 - Jun 2026 · 5 mos | Gamping, Special Region of Yogyakarta, Indonesia · On-site",
                    description: "Assisted as a Lab Assistant and evaluated students weekly assignments."
                },
                {
                    role: "Creative Digital Talent Agency (BDT)",
                    comp: "Baparekraf Digital Talent",
                    dur: "Apr 2026 - May 2026 · 2 mos | Jakarta, Indonesia · Remote",
                    description: "Selected as a scholarship recipient for the Badan Ekraf Digital Talent (BDT) 2026 program, an initiative by the Ministry of Creative Economy (Kemenparekraf/Baparekraf) in collaboration with Dicoding Indonesia. This program focuses on enhancing the capacity of Indonesia's digital creative talents, specifically in AI development."
                },
                {
                    role: "Software Engineer Intern (Front-End)",
                    comp: "PT. MITECH GROUP ASIA",
                    dur: "Aug 2025 - Oct 2025 · 3 mos | Sukoharjo, Central Java, Indonesia · On-site",
                    description: "- Developed the front-end interface for the Autoads Dashboard application utilizing the Ionic Framework to ensure a responsive and user-friendly experience.\n- Integrated the front-end application seamlessly with Firebase as the back-end system for real-time data management.\n- Managed the end-to-end data flow between the user interface and the database to ensure smooth application performance."
                }
            ],
        },

        projects: {
            title: "Projects",
            viewProject: "View Project",
            viewCode: "View Code",
            technologies: "Technologies",
        },

        contact: {
            title: "Get In Touch",
            description:
                "Open to opportunities as an AI Engineer, Machine Learning Engineer, Computer Vision Engineer or MLOps Engineer. Feel free to reach out.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message",
            },
            emailLabel: "Email",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
        },

        footer: {
            rights: "All rights reserved.",
        },
    },
};

export default translations;