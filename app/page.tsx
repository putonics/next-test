import dynamic from "next/dynamic"

const CustomEditor = dynamic(() => import("@/components/custom-editor"), {
  ssr: false,
})

function Home() {
  return <CustomEditor />
}

export default Home
