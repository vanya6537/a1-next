// Add types to JSX.Intrinsic elements so primitives pick up on it
import { Object3DNode } from '@react-three/fiber'
import { CustomMaterial } from 'features/threejs/ui/custom-material'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            customMaterial: Object3DNode<CustomMaterial, typeof CustomMaterial>
        }
    }
}
// react-three-fiber will create your custom component and TypeScript will understand it
