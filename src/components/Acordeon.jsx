import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: 'var(--wh)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '&.Mui-expanded': {
        backgroundColor: 'var(--accent)',
        color: 'var(--wh)'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>What services does Connaught U.S LLC. offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Connaught U.S LLC. offers a range of investment services including stock trading, portfolio management, and retirement planning.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Can I trade stocks online with Connaught U.S LLC.?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, you can trade stocks online through our secure trading platform.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>What are the fees associated with trading with Connaught U.S LLC.?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Trading fees vary based on the type of trade and market conditions. Contact us for a detailed fee schedule.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Does Connaught U.S LLC. offer retirement accounts?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, we offer a variety of retirement accounts including traditional and Roth IRAs.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>How can I open an account with Connaught U.S LLC.?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can open an account by visiting our website and completing the correct online application, we can assist you over the phone, and also we offer in-person account opening at our New York office.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}