import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { DateTime } from 'luxon'
import * as React from 'react';


function Dashboard() {
    const [expandExpires, setExpandExpires] = React.useState(true)

    const mockDate = (days: number) => {
        return DateTime.now().startOf('day').plus({ days: days }).toISODate()
    }

    const expiringFood: { label: string, expires: string }[] = [
        { label: 'Potatoes', expires: mockDate(2) },
        { label: 'Spinach', expires: mockDate(2) },
        { label: 'Carrots', expires: mockDate(3) },
        { label: 'Lettuce', expires: mockDate(4) }
    ]

    const getTimeDiff = (inputDate: string) => {
        const parsedDate = DateTime.fromFormat(inputDate, "yyyy-MM-dd");

        // Get the current DateTime
        const currentDate = DateTime.now().startOf('day');

        // Calculate the difference in days
        const diffInDays = parsedDate.diff(currentDate, 'days').days;

        // Format the difference in a human-readable format
        console.log(diffInDays)
        const formattedDifference = diffInDays === 0 ? 'today' :
            diffInDays === 1 ? 'tomorrow' :
                diffInDays === -1 ? 'yesterday' :
                    `${Math.abs(Math.round(diffInDays))} days`;

        return formattedDifference;
    }

    const handleExpandExpires = () => {
        setExpandExpires(!expandExpires);

    }

    return (
        <>
            <Typography variant='h4' component='h1'>Dashboard</Typography>
            <div id='hero'>
                <Typography variant='h5' component='h2'>Next Meal</Typography>

            </div>
            <div id='expires-soon'>
                <Typography variant='h5' component='h2'>Expires Soon</Typography>
                <List dense>
                    <ListItemButton onClick={handleExpandExpires}>
                        <ListItemText primary="Expires Soon" />
                        {expandExpires ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={expandExpires} timeout="auto" unmountOnExit>
                        {expiringFood.map((food) => {
                            return <ListItem>
                                <ListItemText
                                    primary={food.label}
                                    secondary={getTimeDiff(food.expires)}
                                />
                            </ListItem>
                        })}
                    </Collapse>
                </List>
            </div>
            <div>
                <Typography variant='h5' component='h2'>Upcoming meals</Typography>
            </div>

        </>
    )
}

export default Dashboard