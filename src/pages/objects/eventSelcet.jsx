import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export function EventSelect() {
    return (
        <div class='selectButton'>
            <Stack spacing={2} direction="row">
                <Button variant="text">действия</Button>
            </Stack>
        </div>
    );
}