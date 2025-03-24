import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export function TeamGrid() {
  const teamMembers = [
    {
      name: 'PRANJAY KUMAR',
      image: '/team/sample-profile.jpg',
      linkedin: 'https://linkedin.com/in/pranjay-kumar',
    },
    {
      name: 'TANUSH CHANGANI',
      image: '/team/sample-profile.jpg',
      linkedin: 'https://linkedin.com/in/tanush-changani',
    },
    {
      name: 'SUTHARSIKA KUMAR',
      image: '/team/sample-profile.jpg',
      linkedin: 'https://linkedin.com/in/sutharsika-kumar',
    },
    {
      name: 'AARAV JINDAL',
      image: '/team/sample-profile.jpg',
      linkedin: 'https://linkedin.com/in/aarav-jindal',
    },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            {/* Image Container */}
            <div className="border-2 bg-gray-200 border-gray-300  overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={500}
                className="w-full h-72 object-cover"
              />
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icon-linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="absolute bottom-11 left-2"
                />
              </Link>
            </div>

            {/* LinkedIn Icon and Name */}
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-sm font-normal bg-gradient-to-r from-indigo-800 w-fit  to-teal-500 text-transparent bg-clip-text">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InstitutionGrid() {
  const universities = [
    {
      name: 'University of Pennsylvania',
      logo: '/institutions/image1.png',
    },
    {
      name: 'New York University',
      logo: '/institutions/image2.png',
    },
    {
      name: 'Princeton University',
      logo: '/institutions/image3.png',
    },
    {
      name: 'University of North Carolina',
      logo: '/institutions/image4.png',
    },
    {
      name: 'City University of Hong Kong',
      logo: '/institutions/image5.png',
    },
  ];

  return (
    <div className="container mx-auto py-8 pb-16">
      <h2 className="text-4xl font-bold mb-5  bg-gradient-to-r w-fit mx-auto to-teal-500 from-indigo-800 text-transparent bg-clip-text">
        Used by students at
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
        {universities.map((university, index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-32 relative duration-300"
          >
            <Image
              src={university.logo}
              alt={university.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex flex-col container py-16 mx-auto">
      {/* section 1 */}
      <div className="flex flex-row w-full py-8">
        <div className="w-1/2 md:py-10 py-5 items-center">
          <h2 className="text-5xl font-bold mb-5">
            Build more <span className="text-teal-500">seamless</span> and
            <span className="text-teal-500"> authentic</span> connections.
          </h2>
          <p className="text-gray-900 font-extralight text-2xl">
            Our tool paves the way as the first step in finding your <br /> next{' '}
            <span className="font-semibold">
              referral, job, co-founder, mentor, advisor,
              <br /> investor...{' '}
            </span>{' '}
            All within one personalized email or message <br /> to who
            you&apos;re trying to reach to.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/info.svg"
            alt="Brewmail"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-6xl font-bold leading-tight mb-5">
          Turn conversations <br /> into{' '}
          <span className="relative inline-block">
            <span className="text-teal-500">opportunities</span>
            <Image
              src="/ellipse.svg"
              alt="Brewmail"
              width={100}
              height={100}
              className="absolute -bottom-4 w-full -z-10"
            />
          </span>
        </h1>
        <p className="text-gray-900 font-extralight text-2xl text-center">
          Our AI generates properly formatted cold emails <br /> to help you
          land successful coffee chats, enabling <br /> networking opportunities
          faster.
        </p>
      </div>
      {/* section 3 */}
      <div className="text-center mx-auto py-8">
        <h1 className="text-4xl font-bold mb-5  bg-gradient-to-r w-fit mx-auto to-teal-500 from-indigo-800 text-transparent bg-clip-text">
          HOW IT WORKS
        </h1>
        <p className="text-gray-900 font-extralight text-3xl">
          Our AI technology trains on a diverse set of standard networking
          emails, CV and enriched with <br /> LinkedIn data to craft highly
          personalized messages that sound authentic from the user&apos;s
          writing styles.
        </p>
      </div>

      {/* section 4 */}
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center gap-20">
          {/* Emails Icon */}
          <div className="flex flex-col items-center">
            <h3 className=" text-xl font-medium">Emails</h3>
            <Image src="/email.png" alt="Emails" width={100} height={100} />
          </div>

          {/* User CV Icon */}
          <div className="flex flex-col items-center mt-6">
            <h3 className="text-xl font-medium">User CV</h3>
            <Image src="/cv.svg" alt="User CV" width={100} height={100} />
          </div>

          {/* LinkedIn Data Icon */}
          <div className="flex flex-col items-center">
            <h3 className=" text-xl font-medium">LinkedIn Data</h3>
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Data"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="flex flex-col justify-center items-center -mt-36">
        <Image
          src="/section5.svg"
          alt="section5"
          width={100}
          height={100}
          className="w-full"
        />
        <h4 className="bg-gradient-to-r to-teal-500 from-indigo-800 text-transparent bg-clip-text mt-12 text-3xl">
          Personalised Cold Message
        </h4>
        <Image
          src="/tea.svg"
          alt="section5-2"
          width={100}
          height={100}
          className="w-1/2"
        />
      </div>

      {/* section 6 */}
      <div className="py-8">
        <h2 className="bg-gradient-to-r from-indigo-800 w-fit  to-teal-500 text-transparent bg-clip-text text-4xl font-bold mb-6">
          FOUNDERS
        </h2>
        <p className="text-gray-900 font-extralight text-2xl">
          We are the founders of a little project that could.
        </p>
        <p className="text-gray-900 font-extralight text-2xl">
          A hackathon winning project committed to move students towards
          expanding their network. We&apos;re been there and struggled through
          those thousands of cold emails just to get that referral. We got you!
        </p>
        <TeamGrid />
      </div>

      {/* section 7 */}
      <InstitutionGrid />
    </div>
  );
}
