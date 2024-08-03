'use client'

//import riveWASMResource from "@rive-app/canvas/rive.wasm";
import Rive, { RuntimeLoader } from '@rive-app/react-canvas';

RuntimeLoader.setWasmUrl('rive/rive.wasm');

export default function Home() {

  return (
      <div style={{display: 'grid', placeContent: 'center', height: '100vh', backgroundColor: 'white'}}>
	<Rive
	    src="/rive/macrin.ph.riv"
	    style={{height: 100, width: 200}}
	    artboard="Logo"
	    stateMachines="State Machine 1"
	/>
	<Rive
	    src="/rive/macrin.ph.riv"
	    style={{height: 100, width: 200}}
	    artboard="Default"
	    //artboard="Logo"
	    stateMachines="State Machine 1"
	/>
    </div>
  );
}
