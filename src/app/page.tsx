import { FakeDeliveryCalc } from "@/components"

export default function Home() {
  return (
    <main className="main">
      <div className="center">
        <div>
          <h1>NextJS Cookie Jar</h1>
          <p>A sandbox for testing NextJS Cookies</p>
          <FakeDeliveryCalc />
        </div>
      </div>
    </main>
  );
}
