'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Transition, Variants, motion } from 'framer-motion';

import Navbar from '@/components/navbar';
import Link from 'next/link';
import { Timeline } from '@/components/timeline';
import { Dot, MoveLeft, MoveRight } from 'lucide-react';

import PageTitle from '@/components/pageTitle'
interface Person {
    name: string;
    picture: any;
    bio?: string;
    titles?: string[];
    email?: string;
    open: Boolean;
}

type BackgroundVariants = Variants & {
    hidden: { backgroundPosition: string };
    visible: {
        backgroundPosition: string;
        transition: Transition & {
            repeat?: number;
            repeatType?: 'loop' | 'reverse' | 'mirror';
        };
    };
};

const data = [
    {
        title: 'Febuary-March 2025',
        content: (
            <div className="rounded-md bg-cardColor border-2 border-brand items-center hover:bg-cardColor-light text-white transition duration-700 ease-in-out">
                <div className="flex mb-2 mt-1">
                    <Dot className="stroke-2" />
                    <p className="text-md font-semibold">Robotics demonstrations</p>
                </div>
                <div className="flex my-2">
                    <Dot className="stroke-2" />
                    <p className="text-md font-semibold">Two STEM Workshops per month</p>
                </div>
                <div className="flex my-2">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">
                        Community invite to robotics competitions
                    </p>
                </div>
                <div className="flex mt-2 mb-1">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">
                        Continued outreach and recruitment
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: 'April-May 2025',
        content: (
            <div className="rounded-md bg-cardColor border-2 border-brand items-center hover:bg-cardColor-light text-white transition duration-700 ease-in-out">
                <div className="flex mb-2 mt-1">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">Robotics demonstrations</p>
                </div>
                <div className="flex my-2">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">
                        Two full-day STEM Workshops per month
                    </p>
                </div>
                <div className="flex my-2">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">
                        Continued outreach and recruitment
                    </p>
                </div>
                <div className="flex mt-2 mb-1">
                    <Dot className="stroke-2" />
                    <p className=" text-md font-semibold">Workshop planning</p>
                </div>
            </div>
        ),
    },
    {
        title: 'Summer 2025',
        content: (
            <div className="rounded-md bg-cardColor border-2 border-brand items-center hover:bg-cardColor-light text-white transition duration-700 ease-in-out">
                <div className="flex m-2">
                    <p className="text-md font-semibold">Possible Program TBD</p>
                </div>
            </div>
        ),
    },
];

const About = () => {
    const [expandedProfile, setExpandedProfile] = useState<Person>();

    const ref = useRef(null);
    const teamContainerRef = useRef<HTMLDivElement>(null);
    const collaboratorsContainerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    const toggleExpandedProfile = (profile: Person) => {
        console.log('expanded: ' + expandedProfile?.name);
        console.log('profile: ' + profile?.name);
        setExpandedProfile(expandedProfile?.name == profile?.name ? undefined : profile);
    };

    const people: Person[] = [
        {
            name: 'Daniel Linhardt',
            picture: '@/../images/DanielLinhardt.png',
            bio: `This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! 
                This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is 
                a very cool bio for example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very 
                cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool 
                bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for 
                Example 1! This is a very cool bio for Example 1! This is a very cool bio for Example 1! This is a very cool bio for 
                Example 1! This is a very cool bio for Example 1! `,
            titles: ['Previous President - SOTA Cyberdragons', 'Project Leader'],
            email: 'daniel@team5700.org',
            open: false,
        },
        {
            name: 'Benjamin Thayer',
            picture: '',
            bio: `This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! 
                This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is 
                a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very 
                cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool 
                bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for 
                Example 2! This is a very cool bio for Example 2! This is a very cool bio for Example 2! This is a very cool bio for 
                Example 2! This is a very cool bio for Example 2! `,
            titles: ['President - Galileo Robotics', 'Project Leader'],
            email: 'example2@sfstemlab.org',
            open: false,
        },
        {
            name: 'Katharine Kasperski',
            picture: '',
            bio: `This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! 
                This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is 
                a very cool bio for example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very 
                cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool 
                bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for 
                Example 3! This is a very cool bio for Example 3! This is a very cool bio for Example 3! This is a very cool bio for 
                Example 3! This is a very cool bio for Example 3! `,
            titles: ['Outreach - Lowell Robotics', 'Project Leader'],
            email: 'example3@sfstemlab.org',
            open: false,
        },
        {
            name: 'Mario Romero Barbieri',
            picture: '',
            bio: '',
            titles: ['Member - SOTA Cyberdragons'],
            email: 'mario@team5700.org',
            open: false,
        },
        {
            name: 'Santiago Reid',
            picture: '',
            bio: '',
            titles: ['President - SOTA Cyberdragons'],
            email: 'santi@team5700.org',
            open: false,
        },
        {
            name: 'Tyler Chew',
            picture: '',
            bio: '',
            titles: ['Member - SOTA Cyberdragons'],
            email: 'tyler@team5700.org',
            open: false,
        },
        {
            name: 'Zoe Arkin',
            picture: '',
            bio: '',
            titles: ['Member - SOTA Cyberdragons'],
            email: 'zoe@team5700.org',
            open: false,
        },
        {
            name: 'Sam Lako-Cave',
            picture: '',
            bio: '',
            titles: ['Member - SOTA Cyberdragons'],
            email: 'sam@team5700.org',
            open: false,
        },
        {
            name: 'August White',
            picture: '',
            bio: '',
            titles: ['Software Development Lead - SOTA Cyberdragons'],
            email: 'august@team5700.org',
            open: false,
        },
        {
            name: 'Carter Benson',
            picture: '',
            bio: '',
            titles: ['Buisness Lead - SOTA Cyberdragons'],
            email: 'carter@team5700.org',
            open: false
        },
        {
            name: 'Ember Ximm',
            picture: '@/../images/EmberPFP.png',
            bio: "I'm a 17 year old high school student and visual artist living in San Francisco, interested in pursuing robotics, science, math, programming and engineering opportunities. As an older sister and babysitter, I'm also super excited to bring more STEM education to elementary and middle schools in the district.",
            titles: ['Mechanical Engineering Lead - SOTA Cyberdragons'],
            email: 'ember@team5700.org',
            open: false,
        },
        {
            name: 'Maxwell Liu',
            picture: '',
            bio: '',
            titles: ['President - Lowell Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Maelys Kerherve',
            picture: '',
            bio: '',
            titles: ['Media Lead - SOTA Cyberdragons'],
            email: 'maelys@team5700.org',
            open: false
        },
        {
            name: 'Derrick Lam',
            picture: '',
            bio: '',
            titles: ['Member - Lowell Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Yu-Faye Yang',
            picture: '',
            bio: '',
            titles: ['Vice President of Mechanical Engineering - Lowell Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Mia Ly',
            picture: '',
            bio: '',
            titles: ['Member - Galileo Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Roman Lopez',
            picture: '',
            bio: '',
            titles: ['Member - Galileo Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Davia Ferree',
            picture: '',
            bio: '',
            titles: ['Member - Galileo Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Alvin He',
            picture: '',
            bio: '',
            titles: ['Member - Galileo Robotics'],
            email: '',
            open: false,
        },
        {
            name: 'Bryan Cooley',
            picture: '',
            bio: '',
            titles: ['Mentor', 'Coach - Lowell Robotics', 'Physics Teacher'],
            email: '',
            open: false,
        },
        {
            name: 'Danny Tan',
            picture: '',
            bio: '',
            titles: ['Mentor', 'Coach - Galileo Robotics', 'Computer Science Teacher'],
            email: '',
            open: false,
        },
        {
            name: 'Francisco Hernandez',
            picture: '',
            bio: '',
            titles: ['Coach - SOTA Cyberdragons', 'Science Teacher'],
            email: '',
            open: false,
        },
        {
            name: 'John Hajel',
            picture: '',
            bio: '',
            titles: ['Coach - Washington Robotics', 'Computer Science Teacher'],
            email: '',
            open: false,
        },
    ];

    const collaborators: Person[] = [
        {
            name: 'SOTA Cyberdragons',
            picture: '../../images/CyberdragonsLogoSmall.png',
            open: false,
        },
        {
            name: 'CardinalBotics',
            picture: '../../images/CardinalBoticsLogo.png',
            open: false,
        },
        {
            name: 'Robotic Eagles',
            picture: '../../images/RoboticEaglesLogo.png',
            open: false,
        },
        {
            name: 'Galileo Robotics',
            picture: '../../images/GalileoRoboticsLogo.png',
            open: false,
        },
    ];

    function getImportance(person: Person): number {
        if (person.titles && person.titles !== undefined){
            const titleString = person.titles.join(' ').toLowerCase();
    
            if (titleString.includes('project lead')) return 1;
            if (titleString.includes('president')) return 2;
            if (titleString.includes('lead')) return 3
            if (titleString.includes('coach') || titleString.includes('mentor')) return 4;
            return 5;
        } else return 6
    }

    // Sort people by importance
    people.sort((a, b) => getImportance(a) - getImportance(b));

    const backgroundVariants: BackgroundVariants = {
        hidden: { backgroundPosition: '0% 50%' },
        visible: {
            backgroundPosition: '100% 50%',
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
            },
        },
    };

    return (
        <motion.div
            className="root-div"
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
        >
            <Navbar />
            <img
                src="@/../images/aboutPage_HeroSection.png"
                alt="About Page Hero Section"
                className="hero-image"
                height={6000}
            ></img>
            <PageTitle title='About Us' />
            <div className="main-section">
                <div className='flex'>
                    <div className='flex flex-col w-2/3 pr-10'>
                        <div className="flex items-center space-x-4">
                            <div className="items-center justify-center space-x-2 w-1/3 md:w-1/6">
                                <button
                                    className="text-white py-1 px-3 rounded-2xl items-center border-2 border-brand bg-cardColor hover:bg-cardColor-light transition duration-700 ease-in-out"
                                    onClick={() =>
                                        teamContainerRef.current?.scrollBy({
                                            left: -300,
                                            behavior: 'smooth',
                                        })
                                    }
                                >
                                    <MoveLeft />
                                </button>
                                <button
                                    className="text-white py-1 px-3 rounded-2xl items-center border-2 border-brand bg-cardColor hover:bg-cardColor-light transition duration-700 ease-in-out"
                                    onClick={() =>
                                        teamContainerRef.current?.scrollBy({
                                            left: 300,
                                            behavior: 'smooth',
                                        })
                                    }
                                >
                                    <MoveRight />
                                </button>
                            </div>
                            <h2 className="font-extrabold text-4xl mb-4 w-1/2 md:w-4/6">Our Team</h2>
                        </div>
                        { /* People section */}
                        <div
                            className="rounded-md flex overflow-x-scroll no-scrollbar space-x-3 md:mx-16 py-4"
                            ref={teamContainerRef}
                        >
                            {people.length > 0 &&
                                people.map((person, index) => (
                                    <button
                                        key={index}
                                        className={cn(
                                            'min-w-[350px] md:min-w-[400px] max-w-[400px] h-24 items-center space-x-5 py-2 pl-2 pr-1 rounded-md mb-2 flex border-2 border-brand-dark transition duration-700 ease-in-out',
                                            expandedProfile && expandedProfile.name == person.name ? 'bg-brand/90 hover:bg-brand-light/80 text-darkBlue' : 'bg-cardColor hover:bg-cardColor-light text-white'
                                        )}
                                        onClick={() => toggleExpandedProfile(person)}
                                    >
                                        <img
                                            width={115}
                                            src={person.picture}
                                            alt={person.name}
                                            className='overflow-visible'
                                        />
                                        <div className="">
                                            <h3 className="font-bold text-lg text-left">
                                                {person.name}
                                            </h3>
                                            <h4 className="text-sm text-left">
                                                {person.titles?.join(', ')}
                                            </h4>
                                        </div>
                                    </button>
                                ))}
                        </div>
                        {expandedProfile !== undefined && expandedProfile.bio && (
                            /* Expanded Profile Section */
                            <div className="text-center mt-4 mb-9 items-center w-full flex flex-col">
                                <p className="text-lg text-center">{expandedProfile.bio}</p>
                                <h5 className="flex text-center text-redBrand font-bold mt-4 text-xl cursor-pointer py-1 px-2 rounded-md bg-brand/60 hover:bg-brand/80 transition duration-300">
                                    {expandedProfile.email}
                                </h5>
                            </div>
                        )}
                        <div className="m-3 py-2"> { /* Mission and Vision section */}
                            <div className="md:flex items-center justify-between space-x-4 w-full">
                                <div className="md:w-2/3 pr-6"> { /* Mission section */}
                                    <h3 className="font-extrabold text-4xl">Our Mission</h3>
                                    <p className="text-xl text-brand">
                                        Our mission is to provide a community STEM hub by hosting
                                        interactive robotics demonstrations and hands-on workshops that
                                        promote STEM education, drawing interest from students, families,
                                        and the broader community. The SF STEM Lab enables high school
                                        students to mentor younger students (particularly those underserved
                                        in STEM education, robotics, and engineering), fostering a learning
                                        environment that benefits both mentors and mentees.
                                    </p>
                                </div>
                                <div className="md:w-1/3 mt-6 md:mt-0"> { /* Vision section */}
                                    <h3 className="font-extrabold text-4xl mb-2 sm:mb-0">Our Vision</h3>
                                    <p className="text-xl text-brand">
                                        Our vision is for a long term space that students can rely on for
                                        free STEM enrichment and education. We want to foster a space that
                                        local robotics teams can use for practice, collaboration, and
                                        comunity service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <h2 className="text-center items-center w-full font-extrabold text-4xl mb-4">Our Collaborators</h2>
                        <div
                            className="rounded-md flex flex-col overflow-x-scroll no-scrollbar"
                            ref={collaboratorsContainerRef}
                        >
                            {collaborators.length > 0 &&
                                collaborators.map((collaborator, index) => (
                                    <button
                                        key={index}
                                        className={cn(
                                            ' h-24 items-center py-2 pl-2 pr-1 rounded-md mb-2 flex border-2 border-brand-dark transition duration-700 ease-in-out',
                                            expandedProfile && expandedProfile.name == collaborator.name ? 'bg-brand/90 hover:bg-brand-light/80 text-darkBlue' : 'bg-cardColor hover:bg-cardColor-light text-white'
                                        )}
                                        onClick={() => toggleExpandedProfile(collaborator)}
                                    >
                                        <img
                                            width={80}
                                            src={collaborator.picture}
                                            alt={collaborator.name}
                                    />
                                        <h3 className=" ml-4 font-bold text-lg text-left">
                                            {collaborator.name}
                                        </h3>
                                    </button>
                            ))}
                        </div>
                        <div className="mx-3 pt-10">
                            {/* Our need */}
                            <div className="flex items-center justify-center flex-col space-x-4 w-full">
                                <h2 className="font-extrabold text-4xl mb-2">Our Need</h2>
                                <p className="text-xl text-brand">
                                    The SF STEM Lab has a need for a large space, capable of hosting events
                                    and demonstrations, and an area in which to organize workshops for
                                    hands-on learning activities. We&apos;re hoping to aquire an area that
                                    is around 3100 sq ft, so that we can accomodate both of these spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Timeline data={data} />
            </div>
        </motion.div>
    );
};

export default About;
