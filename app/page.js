import Link from "next/link"
import StudentInfo from "./StudentInfo"

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: WEB DEVELOPMENT 2 - Assignments</h1>
      <br></br>
      <StudentInfo />
      <br></br>
      <nav>
        <Link href="/week2">week2
        </Link><br></br>
        <Link href="/week3">week3
        </Link><br></br>
        <Link href="/week4">week4
        </Link><br></br>
        <Link href="/week5">week5
        </Link><br></br>
        <Link href="/week6">week6
        </Link><br></br>
        <Link href="/week7">week7
        </Link><br></br>
        <Link href="/week8">week8
        </Link><br></br>
        <Link href="/week10">week10
        </Link><br></br>
      </nav>
    </main>
  );
  }



