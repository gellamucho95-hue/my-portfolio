/* ============================================================
   CONFIG.JS
   This is the "single source of truth" for the whole portfolio.
   Just edit the values here — the whole site updates
   automatically because main.js renders from this file.

   Sections marked "// EDIT ME" are placeholders — replace them
   with real information once available.
   ============================================================ */

const CONFIG = {

  /* ---------- 1. PERSONAL IDENTITY ---------- */
  personal: {
    name: "Rex Gellamucho",
    initials: "RG",
    photo: "img/profile.jpg", // profile picture — nasa img/ folder
    handle: "gellamucho95@gmail.com",
    title: "IT Manager & Network Specialist",
    tagline: "Build it once. Run it forever.",
    taglineSub: "Making automation and systems easier to build and run, for faster business growth.",
    location: "Dubai, UAE",
    status: "Available for automation projects",
    verified: true,               // shows the blue verified badge next to the name
    email: "gellamucho95@gmail.com" // EDIT ME
  },

  /* ---------- 2. SIDEBAR NAVIGATION ---------- */
  nav: [
    { id: "home",       label: "Home",        icon: "ph-house" },
    { id: "projects",   label: "Projects",    icon: "ph-folder-open" },
    { id: "services",   label: "Services",    icon: "ph-squares-four" },
    { id: "tools",      label: "Tools I Use", icon: "ph-wrench" },
    { id: "testimonials", label: "Testimonials", icon: "ph-quotes" },
    { id: "about",      label: "About",       icon: "ph-user" },
    { id: "contact",    label: "Contact",     icon: "ph-chat-circle-dots" }
  ],

  /* ---------- 3. FOCUS AREAS ---------- */
  focusAreas: [
    "AI Workflows",
    "GoHighLevel / CRM",
    "IT Infrastructure",
    "Cybersecurity",
    "Systems Automation"
  ],

  /* ---------- 4. SOCIAL / CONTACT LINKS ---------- */
  social: {
    facebook: "https://facebook.com/rexgellamucho",   // EDIT ME
    linkedin: "https://linkedin.com/in/rexgellamucho", // EDIT ME
    discord:  "https://discord.com/users/000000000000000000", // EDIT ME
    email:    "mailto:rex.gellamucho@example.com"      // EDIT ME
  },

  /* ---------- 5. TECHNOLOGIES / TOOLS & PLATFORMS (marquee sa "Daily Drivers") ---------- */
  tools: [
    { name: "FortiGate",       icon: "ph-shield-check" },
    { name: "UniFi",           icon: "ph-wifi-high" },
    { name: "MikroTik",        icon: "ph-router" },
    { name: "Hikvision",       icon: "ph-video-camera" },
    { name: "SALTO",           icon: "ph-key" },
    { name: "XPlan",           icon: "ph-calendar-check" },
    { name: "Windows",         icon: "fa-brands fa-windows" },
    { name: "Microsoft 365",   icon: "fa-brands fa-microsoft" },
    { name: "Networking",      icon: "ph-network" },
    { name: "Access Control",  icon: "ph-lock-key" },
    { name: "CCTV",            icon: "ph-camera" },
    { name: "Remote Support",  icon: "ph-headset" }
  ],

  /* ---------- 6. ABOUT (dedicated About page) ---------- */
  about: {
    pageHeading: "Hi, I'm Rex.",
    pageSub: "I keep business systems running, secured, and online.",
    lead: "I've spent years learning exactly where IT systems break. Now I build, deploy, and support the ones that don't.",
    paragraphs: [
      "I help businesses keep their technology running exactly the way it should — from the network and hardware in the office to the security systems protecting the building. My work spans IT infrastructure, technical support, and physical security, always with the same goal: fewer disruptions, faster fixes, and systems your team can rely on.",
      "I like owning a project from start to finish — planning the rollout, configuring the equipment, and staying the point of contact until everything works the way it's supposed to."
    ],
    categories: [
      { icon: "ph-network",      label: "IT Infrastructure" },
      { icon: "ph-headset",      label: "Technical Support" },
      { icon: "ph-lock-key",     label: "Security Systems" },
      { icon: "ph-shield-check", label: "Networking & Security" }
    ]
  },

  /* ---------- 7. SKILLS & EXPERTISE (grouped, tag-style) ---------- */
  skillGroups: [
    {
      group: "IT Infrastructure",
      items: [
        "Network Administration", "LAN / WAN", "VLAN", "DHCP", "DNS",
        "Firewall Configuration", "Wi-Fi Infrastructure"
      ]
    },
    {
      group: "Technical Support",
      items: [
        "Hardware Troubleshooting", "Windows Administration", "Software Installation",
        "Remote Support", "System Diagnostics", "End-user Support"
      ]
    },
    {
      group: "Security Systems",
      items: [
        "Access Control", "Card Readers", "Biometric Systems", "Door Controllers",
        "Maglocks", "Break Glass", "Push Buttons", "CCTV / IP Cameras"
      ]
    },
    {
      group: "Networking & Security",
      items: [
        "FortiGate", "UniFi", "MikroTik", "Network Troubleshooting",
        "Port Forwarding", "VPN", "Firewall Policies"
      ]
    }
  ],

  /* ---------- 8. CREDENTIALS (replace with your real certification) ---------- */
  credentials: {
    heading: "Certified GoHighLevel Admin",           // EDIT ME
    issuer: "Aspiring Automation Engineer",            // EDIT ME
    description: "Certified GoHighLevel Admin. Always learning new AI and automation tools.", // EDIT ME
    badgeLabel: "Certified Admin"
  },

  /* ---------- 8b. THE METHOD (3-step process on the Services page) ---------- */
  method: {
    eyebrow: "THE PROCESS",
    title: "Assess. Deploy. Support.",
    subtitle: "Always in that order.",
    description: "Every job follows the same process, so nothing gets missed along the way.",
    steps: [
      {
        icon: "ph-magnifying-glass",
        title: "Assess",
        description: "Every system gets checked — network, hardware, and security gaps identified before anything is touched.",
        tags: ["Site Survey", "Diagnostics"]
      },
      {
        icon: "ph-wrench",
        title: "Deploy",
        description: "Equipment configured and deployed correctly the first time — networks, access control, or CCTV.",
        tags: ["Configuration", "Installation"]
      },
      {
        icon: "ph-headset",
        title: "Support",
        description: "Ongoing monitoring and remote support keep everything running after the install.",
        tags: ["Remote Support", "Monitoring"]
      }
    ]
  },

  /* ---------- 8c. FEATURED SERVICES ("What I can do for you") ---------- */
  featuredServices: [
    {
      icon: "ph-network",
      title: "Network Setup & Administration",
      description: "Designed, configured, and maintained networks that just work.",
      tag: "BUILT TO LAST"
    },
    {
      icon: "ph-lock-key",
      title: "Security & Access Control",
      description: "Access control, CCTV, and security systems installed correctly.",
      tag: "SECURE BY DESIGN"
    },
    {
      icon: "ph-shield-check",
      title: "Firewall & Network Security",
      description: "Firewall rules and network hardening tuned for your setup.",
      tag: "LOCKED DOWN"
    },
    {
      icon: "ph-headset",
      title: "IT Support & Troubleshooting",
      description: "Fast, remote or on-site help when something breaks.",
      tag: "FAST RESPONSE"
    },
    {
      icon: "ph-rocket-launch",
      title: "System Deployment & Projects",
      description: "End-to-end coordination from planning to going live.",
      tag: "SHIPS ON TIME"
    }
  ],

  /* ---------- 9. SERVICES — full list, How I can Help ---------- */
  services: [
    {
      icon: "ph-headset",
      title: "IT Support & Troubleshooting",
      description: "Fast, reliable help when hardware, software, or systems stop working the way they should."
    },
    {
      icon: "ph-network",
      title: "Network Setup & Administration",
      description: "Designing and managing networks so every device and system stays connected and reliable."
    },
    {
      icon: "ph-shield-check",
      title: "Firewall Configuration",
      description: "Setting up and tuning firewall rules to keep the network secure without slowing it down."
    },
    {
      icon: "ph-wifi-high",
      title: "Wi-Fi & Network Infrastructure",
      description: "Planning and deploying Wi-Fi and network infrastructure with solid coverage and stability."
    },
    {
      icon: "ph-lock-key",
      title: "Access Control Installation",
      description: "Installing card readers, biometric systems, and door controllers to secure your facility."
    },
    {
      icon: "ph-scan-smiley",
      title: "Security System Support",
      description: "Ongoing support and maintenance for the security systems that protect your business."
    },
    {
      icon: "ph-video-camera",
      title: "CCTV / IP Camera Support",
      description: "Setup, configuration, and troubleshooting for CCTV and IP camera systems."
    },
    {
      icon: "ph-rocket-launch",
      title: "System Deployment & Configuration",
      description: "Rolling out new hardware and software correctly the first time, with minimal downtime."
    },
    {
      icon: "ph-desktop",
      title: "Remote Technical Support",
      description: "Diagnosing and resolving issues remotely, so teams stay productive wherever they are."
    },
    {
      icon: "ph-clipboard-text",
      title: "IT Project Support",
      description: "Coordinating IT projects end to end — planning, deployment, and follow-through."
    }
  ],

  /* ---------- 10. TESTIMONIALS (replace with real feedback) ---------- */
  testimonials: [
    {
      name: "Client 1",                               // EDIT ME
      role: "Operations Manager",                      // EDIT ME
      photo: "img/testimonial-1.svg",                  // EDIT ME — swap for a real client photo
      quote: "Our network and systems have been far more stable since he took over IT support.", // EDIT ME
      tags: ["IT Support", "Network Admin"]
    },
    {
      name: "Client 2",                               // EDIT ME
      role: "Facility Manager",                        // EDIT ME
      photo: "img/testimonial-2.svg",                  // EDIT ME — swap for a real client photo
      quote: "The access control and CCTV installation was handled quickly and professionally.", // EDIT ME
      tags: ["Access Control", "CCTV"]
    },
    {
      name: "Client 3",                               // EDIT ME
      role: "Business Owner",                          // EDIT ME
      photo: "img/testimonial-3.svg",                  // EDIT ME — swap for a real client photo
      quote: "Reliable, responsive, and always follows through until the issue is actually fixed.", // EDIT ME
      tags: ["IT Support", "Remote Support"]
    }
  ],

  /* ---------- 11. EXPERIENCE (replace with your real timeline) ---------- */
  experience: [
    {
      role: "IT Support & Network Administration",   // EDIT ME
      company: "Precision Technologies LLC",                // EDIT ME
      period: "Present",                               // EDIT ME
      description: "Managing day-to-day IT support, network administration, and firewall configuration to keep business systems running reliably." // EDIT ME
    },
    {
      role: "Security Systems & Access Control",       // EDIT ME
      company: "Netsec Technologies LLC",                // EDIT ME
      period: "2018 – 2024",                            // EDIT ME
      description: "Installed and maintained access control, CCTV, and security systems, from card readers and biometrics to door controllers." // EDIT ME
    },
    {
      role: "System Deployment & Technical Support",    // EDIT ME
      company: "MaxxTech Solutions LLC",                // EDIT ME
      period: "2016 – 2018",                            // EDIT ME
      description: "Handled hardware/software deployment, remote technical support, and end-to-end coordination for IT projects." // EDIT ME
    }
  ],

  /* ---------- 12. PROJECTS (replace with your real projects) ---------- */
  projects: [
    {
      title: "Automated Lead-to-Client Pipeline",   // EDIT ME
      tag: "GoHighLevel · Automation",
      description: "Example project — replace with a short description of what you actually built.", // EDIT ME
      image: "img/project-1.svg"  // EDIT ME — swap for a real screenshot once you have one
    },
    {
      title: "AI-Powered Support Workflow",          // EDIT ME
      tag: "AI Workflows",
      description: "Example project — replace with a short description of what you actually built.", // EDIT ME
      image: "img/project-2.svg"
    },
    {
      title: "Infrastructure Monitoring Setup",      // EDIT ME
      tag: "IT Infrastructure · Security",
      description: "Example project — replace with a short description of what you actually built.", // EDIT ME
      image: "img/project-3.svg"
    }
  ],

  /* ---------- 13. CONTACT SECTION TEXT ---------- */
  contact: {
    heading: "Let's Talk",
    text: "I'm open to projects involving AI automation, CRM systems, or IT infrastructure. Feel free to reach out through any of the links below."
  },

  /* ---------- 14. FLOATING CHAT BUBBLE TEXT ---------- */
  chatBubble: {
    greeting: "Hi! How can I help you?"
  }
};
