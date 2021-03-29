import { useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <table>
        <table id="Head">
          <tr>

              <Link href="/">Homepage</Link>

              <Link href="/Gpacalc">GPA Calculator</Link>
              <Link href="/Gallery">Gallery</Link>

              <Link href="/Contract">Contract</Link>
              <Link href="/post">Posts</Link>

          </tr>
          
        </table>
        <table>
          <table>
            <tr>
              <td>
                <h1>Chanathip Songchanthuek</h1>
                <h3>Student</h3>
                <h2>chanathip_song@cmu.ac.th</h2>
                <h3>(+66) -956-781116</h3>
              </td>
              <th>
                <img width="200px" src="imgsrc/profile.jpg" alt="profile"/>
              </th>
            </tr>
          </table>
        </table>
      </table>
      <h1>Profile</h1>
      <p>Aueboon  620612145 </p>
      <h3>Education</h3>
      <p>Facuty of Engineering , Chiang Mai University</p>
      <h2>Skill and Technical</h2>
      <p>C++, Java, Data structer</p>

      
    </>

  )
}

export default Home