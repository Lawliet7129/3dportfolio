import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scene from "../assets/3d/chess_board.glb";

export function Chess(props) {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <group scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteBishop001_WhiteBishop_0.geometry}
          material={materials.WhiteBishop}
          position={[4.536, 1, -10.397]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteKing001_WhiteKing_0.geometry}
          material={materials.WhiteKing}
          position={[-1.39, 1, -10.459]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteKnight001_WhiteKnight_0.geometry}
          material={materials.WhiteKnight}
          position={[4.567, 1, -4.65]}
          rotation={[-Math.PI / 2, 0, -1.492]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn001_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[-7.498, 1, -7.381]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteQueen001_WhiteQueen_0.geometry}
          material={materials.WhiteQueen}
          position={[1.512, 1, -10.508]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteRook001_WhiteRook_0.geometry}
          material={materials.WhiteRook}
          position={[-10.443, 1, -10.453]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackKing001_BlackKing_0.geometry}
          material={materials.BlackKing}
          position={[-1.699, 1, 10.602]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackKnight001_BlackKnight_0.geometry}
          material={materials.BlackKnight}
          position={[4.485, 1, 4.56]}
          rotation={[-Math.PI / 2, 0, 1.592]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn001_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[-10.512, 1, 7.455]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackQueen001_BlackQueen_0.geometry}
          material={materials.BlackQueen}
          position={[1.526, 1, 10.629]}
          rotation={[-Math.PI / 2, 0, -0.307]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackRook001_BlackRook_0.geometry}
          material={materials.BlackRook}
          position={[-10.519, 1, 10.523]}
          rotation={[-Math.PI / 2, 0, -0.552]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteRook002_WhiteRook_0.geometry}
          material={materials.WhiteRook}
          position={[10.496, 1, -10.561]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn002_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[-4.444, 1, -7.471]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn003_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[-1.387, 1, -1.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn004_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[1.472, 1, -7.595]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn005_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[4.507, 1, -7.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn006_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[7.437, 1, -7.396]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn007_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[10.443, 1, -7.273]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhitePawn008_WhitePawn_0.geometry}
          material={materials.WhitePawn}
          position={[-10.531, 1, -7.59]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackRook002_BlackRook_0.geometry}
          material={materials.BlackRook}
          position={[10.515, 1, 10.554]}
          rotation={[-Math.PI / 2, 0, -0.552]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn002_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[-7.564, 1, 7.696]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn003_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[-4.56, 1, 7.688]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn004_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[-1.375, 1, 1.656]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn005_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[1.678, 1, 7.472]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn006_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[4.493, 1, 7.458]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn007_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[7.557, 1, 7.52]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackPawn008_BlackPawn__0.geometry}
          material={materials.BlackPawn}
          position={[10.573, 1, 7.446]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackKnight002_BlackKnight_0.geometry}
          material={materials.BlackKnight}
          position={[-7.566, 1, 10.416]}
          rotation={[-Math.PI / 2, 0, 1.512]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackBishop002_BlackBishop_0.geometry}
          material={materials.BlackBishop}
          position={[4.526, 1, 10.444]}
          rotation={[-Math.PI / 2, 0, 0.331]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BlackBishop003_BlackBishop_0.geometry}
          material={materials.BlackBishop}
          position={[4.526, 1, 1.38]}
          rotation={[-Math.PI / 2, 0, 0.331]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteKnight002_WhiteKnight_0.geometry}
          material={materials.WhiteKnight}
          position={[-7.458, 1, -10.557]}
          rotation={[-Math.PI / 2, 0, -1.55]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteBishop002_WhiteBishop_0.geometry}
          material={materials.WhiteBishop}
          position={[-4.457, 1, -10.461]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChessBoard_ChessBoard_0.geometry}
          material={materials.ChessBoard}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChessBoardGrid_ChessBoardGrid_0.geometry}
          material={materials.ChessBoardGrid}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload(scene)