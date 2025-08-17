import { useState } from 'react'
import { Checkbox, Text, UnstyledButton } from '@mantine/core'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import classes from './css/CheckboxCard.module.css';


function App() {
  const [value, setValue] = useState(true)

  return (
    <MantineProvider>
      <UnstyledButton onClick={() => setValue(!value)} className={classes.button}>
      <Checkbox
      checked = {value}
      onChange={() => {}}
      tabIndex={-1}
      size="md"
      mr="xl"
      styles={{ input: {cursor: 'pointer'} }}
      aria-hidden
      />
   
      <div>
    <Text fw={500} mb={7} lh={1}>
      @maintin/core
    </Text>
    <Text fz="sm" c="dimmed">
       Core components library: inputs, buttons, overlays, etc.
    </Text>
      </div>
      </UnstyledButton>
      </MantineProvider>
  )
}

export default App
