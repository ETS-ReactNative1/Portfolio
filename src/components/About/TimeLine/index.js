import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const AboutTimeline = () => {
    return (
        <Timeline position="alternate">
            
            {/* CARA Intern */}
            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    fontSize="1.5rem"
                    variant="body"
                    color="#ffffff"
                >
                    Dec 2021 - Jun 2022
                    <br/>
                    React.Js | Node.Js | MySQl
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent 
                sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h4" component="span" color="#ffd700" fontSize="2.25rem" >
                        Full Stack Developer Intern
                    </Typography>
                    <Typography
                    color="#ffd700" fontSize="1.25rem"
                    >
                        Central Adoption Resource Authority,<br/>
                        Ministry of Women and Child Development, India
                    </Typography>
                </TimelineContent>

            </TimelineItem>

            {/* IIT  Madras */}
            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    fontSize="1.5rem"
                    variant="body"
                    color="#ffffff"
                >
                    Jan 2021 - Jan 2025
                    <br/>
                    8.4 CGPA
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent 
                sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h4" component="span" color="#ffd700" fontSize="2.25rem" >
                        B.Sc. in PROGRAMMING &amp; DATA SCIENCE
                    </Typography>
                    <Typography
                    color="#ffd700" fontSize="1.25rem"
                    >
                        Indian Institute of Technology Madras
                    </Typography>
                </TimelineContent>

            </TimelineItem>

            {/* DTU */}
            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    fontSize="1.5rem"
                    variant="body"
                    color="#ffffff"
                >
                    Dec 2020 - Aug 2024
                    <br/>
                    9.2 CGPA
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h4" component="span" color="#ffd700" fontSize="2.25rem" >
                        B.Tech with Majors in Mechanical Engineering
                    </Typography>
                    <Typography
                    color="#ffd700" fontSize="1.25rem"
                    >
                        Delhi Technological University
                    </Typography>
                </TimelineContent>

            </TimelineItem>

            {/* 12th */}
            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    fontSize="1.5rem"
                    variant="body"
                    color="#ffffff"
                >
                    Apr 2018 - Mar 2020
                    <br/>
                    96.75%
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h4" component="span" color="#ffd700" fontSize="2.25rem" >
                    Higher Secondary School Certificate ( ISC Board )
                    </Typography>
                    <Typography
                    color="#ffd700" fontSize="1.25rem"
                    >
                        Lucknow Public School
                    </Typography>
                </TimelineContent>

            </TimelineItem>

            {/* 10th */}
            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    fontSize="1.5rem"
                    variant="body"
                    color="#ffffff"
                >
                    Apr 2016 - Mar 2018
                    <br/>
                    94.8%
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant='outlined' />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h4" component="span" color="#ffd700" fontSize="2.25rem" >
                    Secondary School Certificate ( ICSE board )
                    </Typography>
                    <Typography
                    color="#ffd700" fontSize="1.25rem"
                    >
                        Lucknow Public School
                    </Typography>
                </TimelineContent>

            </TimelineItem>

        </Timeline>
    );
};

export default AboutTimeline;