"use client";

import { useEffect, useState } from "react";
import { TDummy } from "../api/dummy/route";
import styles from "../../styles/test.module.css";

export default function Test() {
  const [dummy, setDummy] = useState<TDummy[]>([]);

  useEffect(() => {
    const getDummy = async () => {
      const resp = await fetch("/api/dummy");
      if (!resp.ok) {
        throw new Error("Nextwork Error!!");
      }
      const data = await resp.json();
      console.log(data);
      setDummy(data);
    };
    getDummy();
  }, []);

  const onClick = async () => {
    const dummryrow: TDummy = {
      id: dummy.length + 1,
      title: "add test",
      description: "add test",
    };
    const resp = await fetch("/api/dummy", {
      method: "POST",
      body: JSON.stringify(dummryrow),
      headers: { "Content-Type": "application/json" },
    });

    setDummy([...dummy, dummryrow]);
  };
  return (
    <div>
      <h1 className={styles.title}>GET Dummy</h1>
      <div className={styles.container}>
        {dummy.map((r: TDummy) => (
          <p key={r.id}>
            {r.id} {r.title} {r.description}
          </p>
        ))}
      </div>
      <div>
        <button onClick={onClick}>Add</button>
      </div>
    </div>
  );
}
