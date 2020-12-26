import React from 'react';
import styled from 'styled-components';
import Title from "../Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MOBILE_WIDTH } from "../../../../constants";

const Layout = styled.div`
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 20px 25px;
    border-radius: 6px;
    height: 320px;
    @media screen and (max-width: ${MOBILE_WIDTH}) {
        padding: 10px 9px;
        height: 220px;
        font-size: 12px;
      }
`;

const ContactList = styled.ul`
    padding-left: 0px;
`;

const ContactItem = styled.li`
    color: white;
    font-size: 1.1em;
    list-style: none;
    margin: 12px 0 0 3px;
    line-height: 1.8em;
    padding: 2px 1em;
    @media screen and (max-width: ${MOBILE_WIDTH}) {
        font-size: 10px;
    }
`;

const MediaList = styled.ul`
    display: flex;
    padding-left: 0;
    justify-content: space-around;
    margin-top: 3.1em;
    @media screen and (max-width: ${MOBILE_WIDTH}) {
        font-size: 10px;
        margin-top: 1.9em;
    }
`;

const IconItem = styled.li`
    list-style: none;
`;

const LIST_CONTACT = [
    {
        key: "address",
        contains: "62 Main Street, Melbourne, VIC",
        icon: "map-marker-alt"
    },
    {
        key: "phone",
        contains: "+1 555 123456",
        icon: "phone-square-alt"
    },
    {
        key: "email",
        contains: "support@medibooking.com",
        icon: "envelope"
    }
];

const LIST_ICON = [
    "facebook",
    "twitter",
    "instagram",
];

const Contact = () => {
    return <Layout>
        <Title titleName="Contact" />
        <ContactList>
            {LIST_CONTACT.map((l) => (
                <ContactItem key={l.key}>
                    <FontAwesomeIcon 
                    icon={l.icon}
                    transform="grow-5 left-17 down-1.5"
                    color="white"/>
                    {l.contains}
                </ContactItem> 
            ))}
        </ContactList>
        <MediaList>
            {LIST_ICON.map((l) => (
                <IconItem key={l}>
                    <FontAwesomeIcon
                    icon={['fab', l]}
                    color="white"
                    size="3x"
                    />
                </IconItem>
            ))}
        </MediaList>
    </Layout>
};

export default Contact;