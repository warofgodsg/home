import { useEffect, useState } from 'react'
import { Checkbox, Text, UnstyledButton, type NativeSelectProps } from '@mantine/core'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import classes from './css/CheckboxCard.module.css';
import useAxios from './hooks/useAxios';

interface upparam {
  username : string;
  password : string;
  client_id : string;
}
function App() {
  
  const data: upparam = {
      username:'admin',
      password: 'aisnb',
      client_id: 'SK_DEMO'
  }

  
const [checkvalue, setcheckValue] = useState(false);



  useEffect(() => {
    
    //param.username = 'admin';

    // param = {
    //   username:'admin',
    //   password: 'aisnb',
    //   client_id: 'SK_DEMO'
    // }
    useAxios('https://aip-stg.sktai.io/api/v1/auth/login', data);
  }, [])
  //get_list('', null)
  return (
    <MantineProvider>
      <UnstyledButton onClick={() => setcheckValue(!checkvalue)} className={classes.button}>
      <Checkbox
      checked = {checkvalue}
      onChange={() => {}}
      tabIndex={-1}
      size="md"
      mr="xl"
      styles={{ input: {cursor: 'pointer'} }}
      aria-hidden
      />
   
      <div>
    <Text fw={500} mb={7} lh={1}>
      @maintin/core 123 test 
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
