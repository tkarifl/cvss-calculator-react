const scoreData = {

    critical: {
        header: "P1: Critical",
        description: `Vulnerabilities that cause a privilege escalation on the platform 
        from unprivileged to admin, allows remote code execution, financial theft, 
        large scale access to PII, etc.. At the discretion of Patron Technology, 
        vulnerabilities that demonstrate a critical, widespread risk to information security 
        may be eligible to receive a reward greater than the standard bounty. Example: 
        Vulnerabilities that result in unrestricted Remote Code Execution such as Vertical 
        Authentication bypass, SSRF, XXE, SQL Injection, User authentication bypass.`
    },
    high: {
        header: "P2: High",
        description: `Vulnerabilities that affect the security of the platform including 
        the processes it supports. Example: Lateral authentication bypass, Stored XSS, some CSRF depending on impact.`
    },
    moderate: {
        header: "P3: Moderate",
        description: `Vulnerabilities that affect multiple users, and require little 
        or no user interaction to trigger. Example: Some reflective XSS, 
        Some direct object reference, URL Redirect, some CSRF depending on impact.`
    },
    low: {
        header: "P4: Low",
        description: `Issues that affect singular users and require interaction 
        or significant prerequisites (MITM) to trigger. Example: Common flaws, Detailed debug information.`
    }
}

export default scoreData;
