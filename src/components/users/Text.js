
import { Typography } from "@material-ui/core";
import { useNode } from "@craftjs/core";

import React, {useCallback,useEffect,useState} from "react";
import ContentEditable from 'react-contenteditable'

import {Slider, FormControl, FormLabel} from "@material-ui/core";

export const Text = ({text, fontSize}) => {
  const { connectors: {connect, drag}, isActive, actions: {setProp} } = useNode((node) => ({
    isActive: node.events.selected
  }));
    const [editable, setEditable] = useState(false);
  
 
  return (
     <div 
      ref={ref => connect(drag(ref))}
    >
      <ContentEditable
        html={text} 
       className="p"
        onChange={e => 
          setProp(props => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`}}
      />
         
        
      
    </div>
  )
}

const TextSettings = () => {
  const { actions: {setProp}, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp(props => props.fontSize = value);
          }}
        />
      </FormControl>
    </>
  )
}

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  rules: {
    canDrag: (node) => node.data.props.text != "Drag"
  },
  related: {
    settings: TextSettings
  }  
}