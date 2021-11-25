import Title from "components/title";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";

import Styles from "./coreteam.module.css";

const members = [
    {
        name: 'JAMES FERGUSON',
        role: 'CMO/CO-FOUDER',
        bio: 'Over 26 years in the Finance area, 20 years in the blockchain industry. Built many platforms and assisted Startups. Experienced in the field of real estate, F&B,VR, AR',
        imageUrl: '/images/members/v5.png',
    },
    {
        name: 'MATT DAMON',
        role: 'CHAIRMAN/CO-FOUDER',
        bio: 'Over 15 years of experience in the Game industry. Participated in and developed many Online game projects with millions of users. Over 6 years of experience in the Blockchain field. Expert in VR, AR',
        imageUrl: '/images/members/v4.png',
    },
    {
        name: 'JOE',
        role: 'Software Development',
        bio: 'Over 8 years of experience in the Game industry and Blockchain field',
        imageUrl: '/images/members/v3.png',
    },
    {
        name: 'RYAN',
        role: 'CREATIVE DIRECTOR',
        bio: 'Over 10 years of experience in the digital marketing field, 8 years the Blockchain Marketing industry. Helped developed products for various brands. Developed brands for Startups',
        imageUrl: '/images/members/v2.png',
    },
    {
        name: 'MEG',
        role: 'ART LEADER',
        bio: 'Over 8 years of experience in the Game industry. Participated in various game projects. Participated in various 2D, 3D game projects',
        imageUrl: '/images/members/v1.png',
    },
    {
        name: 'STEWIE',
        role: 'HEAD OF GAME DESIGN',
        bio: 'Over 7 years of experience in the Game industry. Participated in various 2D, 3D game projects',
        imageUrl: '/images/members/v6.png',
    },
    {
        name: 'JENIFER',
        role: 'MARKETING LEADER',
        bio: 'Over 9 years of experience in the digital marketing field, 5 years the Blockchain Marketing industry.',
        imageUrl: '/images/members/v7.png',
    },
    {
        name: 'SCARLETT',
        role: 'CMO',
        bio: 'Over 8 years of experience in the digital marketing field, 6 years the Blockchain Marketing industry. Participated in various game projects',
        imageUrl: '/images/members/v8.png',
    },
];

export default function CoreTeam() {
    return (
        <section id="core-team">
            <Container>
                <Row>
                    <Title text="Core Team" />
                    <div className={Styles.content}>
                        The team always plays an important role in the success of a project. As a team, we have been working with each other
                        for more than 5 years, with everyone being highly experienced in their own expertise
                    </div>

                    <div className={Styles.members}>
                        {members.map((member, index) => (
                            <Member key={index} {...member} />
                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    );
}

function Member(props: any) {
    return (
        <div className={Styles.member}>
            <div className={Styles.avatar}>
                <img src={props.imageUrl} />
            </div>
            <div className={Styles.name}>{props.name}</div>
            <div className={Styles.role}>{props.role}</div>
            <div className={Styles.bio}>{props.bio}</div>
        </div>
    );
}
