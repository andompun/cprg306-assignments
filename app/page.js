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
      </nav>
    </main>
  );
  }



