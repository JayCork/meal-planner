import { MoreVert } from '@mui/icons-material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import {
    List,
    ListItem,
    IconButton,
    ListItemButton, ListItemIcon, Checkbox, ListItemText, Fab, TextField, InputAdornment, Select, MenuItem, SelectChangeEvent, InputLabel
} from '@mui/material';
import * as React from 'react';

import Collapse from '@mui/material/Collapse';


function Storage() {

    const [checked, setChecked] = React.useState([0]);
    const [showInput, setShowInput] = React.useState(false)

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleAdd = () => {
        setShowInput(!showInput)
    }

    const storageItems = [
        { name: 'Eggs', quant: 12, unit: 'eggs', expires: '2024-01-09' },
        { name: 'Turkey Nuggets', quant: 500, unit: 'g', expires: '2024-01-09' },
    ]

    const [unitState, setUnitState] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setUnitState(event.target.value as string);
    };



    return (
        <>
            <h1>Storage</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Expires Soon" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {storageItems.map((value, index) => {
                        const labelId = `checkbox-list-label-${value.name}`;
                        return (
                            <ListItem
                                key={value.name}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="more">
                                        <MoreVert />
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton
                                    role={undefined}
                                    onClick={handleToggle(index)}
                                    dense
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={index !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={value.name}
                                        secondary={`${value.quant} ${value.unit}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </Collapse>

            </List>
            {showInput &&
                <div id='add ingredient'>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <TextField
                        id="standard-basic"
                        label="Quant"
                        variant="standard"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{unitState}</InputAdornment>,
                        }}
                    />
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={unitState}
                        label="Unit"
                        onChange={handleChange}
                    >
                        <MenuItem value={'g'}>Grams</MenuItem>
                        <MenuItem value={'kg'}>Kilograms</MenuItem>
                        <MenuItem value={'ml'}>Millimeters</MenuItem>
                    </Select>



                </div>
            }
            <Fab color="primary" aria-label="add" onClick={handleAdd}>
                <AddIcon />
            </Fab>

        </>
    )
}

export default Storage