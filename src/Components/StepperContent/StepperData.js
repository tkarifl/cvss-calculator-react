const stepperData = [
    {
        title: "Attack Vector (AV)",
        description: `This metric reflects the context by which vulnerability exploitation is possible.
        This metric value (and consequently the Base score) will be larger the more remote (logically, and physically)
        an attacker can be in order to exploit the vulnerable component.`,
        toggleButtons: [
            {
                buttontext: "Network",
                tooltipText: `A vulnerability exploitable with Network access means the vulnerable component 
                is bound to the network stack and the attacker's path is through OSI layer 3 (the network layer). 
                Such a vulnerability is often termed 'remotely exploitable' and can be thought of as an attack being 
                exploitable one or more network hops away (e.g. across layer 3 boundaries from routers).`,
                value: "AV:N"
            },
            {
                buttontext: "Adjacent Network",
                tooltipText: `A vulnerability exploitable with Adjacent Network access means the vulnerable component 
                is bound to the network stack, however the attack is limited to the same shared physical 
                (e.g. Bluetooth, IEEE 802.11), or logical (e.g. local IP subnet) network, and 
                cannot be performed across an OSI layer 3 boundary (e.g. a router).`,
                value: "AV:A"
            },
            {
                buttontext: "Local",
                tooltipText: `A vulnerability exploitable with Local access means that the vulnerable component
                 is not bound to the network stack, and the attacker's path is via read/write/execute capabilities.
                  In some cases, the attacker may be logged in locally in order to exploit the vulnerability, 
                or may rely on User Interaction to execute a malicious file.`,
                value: "AV:L"
            },
            {
                buttontext: "Physical",
                tooltipText: `A vulnerability exploitable with Physical access requires the attacker to physically touch or
                 manipulate the vulnerable component, such as attaching an peripheral device to a system.`,
                value: "AV:P"
            }
        ]
    },
    {
        title: "Attack Complexity (AC)",
        description: `The Attack Complexity metric describes the conditions beyond the attacker's 
        control that must exist in order to exploit the vulnerability. As described below, 
        such conditions may require the collection of more information about the target, 
        the presence of certain system configuration settings, or computational exceptions..`,
        toggleButtons: [
            {
                buttontext: "Low",
                tooltipText: `Specialized access conditions or extenuating circumstances do not exist.
                 An attacker can expect repeatable success against the vulnerable component.`,
                value: "AC:L"
            },
            {
                buttontext: "High",
                tooltipText: `A successful attack depends on conditions beyond the attacker's control. 
                That is, a successful attack cannot be accomplished at will, 
                but requires the attacker to invest in some measurable amount of effort 
                in preparation or execution against the vulnerable component before a successful attack can be expected.`,
                value: "AC:H"
            }
        ]
    },
    {
        title: "Privileges Required (PR)",
        description: `This metric describes the level of privileges an attacker must possess 
        before successfully exploiting the vulnerability..`,
        toggleButtons: [
            {
                buttontext: "None",
                tooltipText: `The attacker is unauthorized prior to attack, and 
                therefore does not require any access to settings or files to carry out an attack.`,
                value: "PR:N"
            },
            {
                buttontext: "Low",
                tooltipText: `The attacker is authorized with (i.e. requires) privileges that provide basic user 
                capabilities that could normally affect only settings and files owned by a user. Alternatively, 
                an attacker with Low privileges may have the ability to cause an impact only to non-sensitive resources.`,
                value: "PR:L"
            },
            {
                buttontext: "High",
                tooltipText: `The attacker is authorized with (i.e. requires) privileges that provide significant 
                (e.g. administrative) control over the vulnerable component that could affect component-wide settings and files.`,
                value: "PR:H"
            }
        ]
    },
    {
        title: "User Interaction (UI)",
        description: `This metric captures the requirement for a user, other than the attacker, 
        to participate in the successful compromise of the vulnerable component. This metric determines 
        whether the vulnerability can be exploited solely at the will of the attacker, 
        or whether a separate user (or user-initiated process) must participate in some manner..`,
        toggleButtons: [
            {
                buttontext: "None",
                tooltipText: `The vulnerable system can be exploited without interaction from any user..`,
                value: "UI:N"
            },
            {
                buttontext: "Required",
                tooltipText: `Successful exploitation of this vulnerability requires a user to take some action before 
                the vulnerability can be exploited, such as convincing a user to click a link in an email.`,
                value: "UI:R"
            }
        ]
    },
    {
        title: "Scope (S)",
        description: `An important property captured by CVSS v3.0 is the ability for a 
        vulnerability in one software component to impact resources beyond its means, or privileges. This consequence is 
        represented by the metric Authorization Scope, or simply Scope. 
         For more information see the CVSSv3 Specification (https://www.first.org/cvss/specification-document#i2.2).`,
        toggleButtons: [
            {
                buttontext: "Unchanged",
                tooltipText: `An exploited vulnerability can only affect resources managed 
                by the same authority. In this case the vulnerable component and the impacted component are the same.`,
                value: "S:U"
            },
            {
                buttontext: "Changed",
                tooltipText: `An exploited vulnerability can affect resources beyond the authorization 
                privileges intended by the vulnerable component. In this case the vulnerable component 
                and the impacted component are different.`,
                value: "S:C"
            }
        ]
    },
    {
        title: "Confidentiality Impact (C)",
        description: `This metric measures the impact to the confidentiality of the information 
        resources managed by a software component due to a successfully exploited vulnerability. 
        Confidentiality refers to limiting information access and disclosure to only authorized users, 
        as well as preventing access by, or disclosure to, unauthorized ones.`,
        toggleButtons: [
            {
                buttontext: "None",
                tooltipText: `There is no loss of confidentiality within the impacted component.`,
                value: "C:N"
            },
            {
                buttontext: "Low",
                tooltipText: `There is some loss of confidentiality. Access to some restricted information is obtained, 
                but the attacker does not have control over what information is obtained, or the amount or kind of loss 
                is constrained. The information disclosure does not cause a direct, serious loss to the impacted component.`,
                value: "C:L"
            },
            {
                buttontext: "High",
                tooltipText: `There is total loss of confidentiality, resulting in all resources within the 
                impacted component being divulged to the attacker. Alternatively, access to only some 
                restricted information is obtained, but the disclosed information presents a direct, serious impact.`,
                value: "C:H"
            }
        ]
    },
    {
        title: "Integrity Impact (I)",
        description: `This metric measures the impact to integrity of a successfully exploited vulnerability. 
        Integrity refers to the trustworthiness and veracity of information.`,
        toggleButtons: [
            {
                buttontext: "None",
                tooltipText: `There is no loss of integrity within the impacted component.`,
                value: "I:N"
            },
            {
                buttontext: "Low",
                tooltipText: `Modification of data is possible, but the attacker does not have control over 
                the consequence of a modification, or the amount of modification is constrained. 
                The data modification does not have a direct, serious impact on the impacted component.`,
                value: "I:L"
            },
            {
                buttontext: "High",
                tooltipText: `There is a total loss of integrity, or a complete loss of protection. 
                For example, the attacker is able to modify any/all files protected by the impacted 
                component. Alternatively, only some files can be modified, but malicious modification 
                would present a direct, serious consequence to the impacted component.`,
                value: "I:H"
            }
        ]
    },
    {
        title: "Availability Impact (A)",
        description: `This metric measures the impact to the availability of the impacted component 
        resulting from a successfully exploited vulnerability. While the Confidentiality and Integrity 
        impact metrics apply to the loss of confidentiality or integrity of data (e.g., information, files) 
        used by the impacted component, this metric refers to the loss of availability of the impacted component 
        itself, such as a networked service (e.g., web, database, email). Since availability refers to the accessibility 
        of information resources, attacks that consume network bandwidth, processor cycles, or disk space 
        all impact the availability of an impacted component.`,
        toggleButtons: [
            {
                buttontext: "None",
                tooltipText: `There is no impact to availability within the impacted component.`,
                value: "A:N"
            },
            {
                buttontext: "Low",
                tooltipText: `There is reduced performance or interruptions in resource availability. 
                Even if repeated exploitation of the vulnerability is possible, the attacker does not 
                have the ability to completely deny service to legitimate users. The resources in the 
                impacted component are either partially available all of the time, or fully available 
                only some of the time, but overall there is no direct, serious consequence to the impacted component.`,
                value: "A:L"
            },
            {
                buttontext: "High",
                tooltipText: `There is total loss of availability, resulting in the attacker being 
                able to fully deny access to resources in the impacted component; this loss is either 
                sustained (while the attacker continues to deliver the attack) or persistent 
                (the condition persists even after the attack has completed). Alternatively, the 
                attacker has the ability to deny some availability, but the loss of availability presents a 
                direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt 
                existing connections, but can prevent new connections; the attacker can repeatedly exploit a 
                vulnerability that, in each instance of a successful attack, leaks a only small amount of 
                memory, but after repeated exploitation causes a service to become completely unavailable).`,
                value: "A:H"
            }
        ]
    },

];

export default stepperData;
