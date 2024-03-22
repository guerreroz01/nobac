"use client";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import Nobac from "./Nobac";
import NobacOpen from "./NobacOpen";
type ModelType = {
  title: string;
  color: string[];
  img: any;
};

type ModelViewType = {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: string;
  controlRef: React.MutableRefObject<any>;
  setRotationState: React.Dispatch<React.SetStateAction<any>>;
  item: ModelType;
  size: string;
};

function ModelView({
  controlRef,
  groupRef,
  gsapType,
  index,
  item,
  size,
  setRotationState,
}: ModelViewType) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      } z-50`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.2} />

      <PerspectiveCamera
        makeDefault
        position={index === 1 ? [1, 0, 4] : [0, 0, 5]}
      />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, index === 1 ? 0 : -1, 0]}
      >
        <Suspense fallback={<Loader />}>
          {index === 1 ? (
            <Nobac
              scale={
                index === 1 ? [0.025, 0.025, 0.025] : [0.025, 0.025, 0.025]
              }
              item={item}
              size={size}
            />
          ) : (
            <NobacOpen
              scale={index === 1 ? [0.025, 0.025, 0.025] : [0.02, 0.02, 0.02]}
              item={item}
              size={size}
            />
          )}
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
