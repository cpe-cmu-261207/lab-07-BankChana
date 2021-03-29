import Link from 'next/link'
const Gallery = () => {
    return (
    <>
            <table>
                <table id="Head">
                    <tr>

                            <Link href="/"> Homepage</Link>

                            <Link href="/Gallery"> Gallery</Link>

                            <Link href="/Contract">Contract </Link>
                    </tr>
                </table>
                <table>
                    <table>
                        <tr>
                            <td>
                            <h1>Chanathip Songchanthuek</h1>
                            <h3>Faculty of Engineering</h3>
                            <h2>chanathip_song@cmu.ac.th</h2>
                            </td>
                            <th>
                                <img width="200px" src="imgsrc/profile.jpg" alt="profile"/>
            </th>
          </tr>
  </table>
                    </table>
                    <h1>Gallery</h1>

                    <table>
                        <table border="1px">
                            <tr>
                                <th>
                                    <img width="300px" src="imgsrc/IMG001.jpg" alt="IMG001" />
                                    <p>1</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG002.jpg" alt="IMG002" />
                                    <p>2</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG003.jpg" alt="IMG003" />
                                    <p>3</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img width="300px" src="imgsrc/IMG004.jpg" alt="IMG004" />
                                    <p>4</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG005.png" alt="IMG005" />
                                    <p>5</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG006.jpg" alt="IMG006" />
                                    <p>6</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img width="300px" src="imgsrc/IMG007.jpg" alt="IMG007" />
                                    <p>7</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG008.jpg" alt="IMG008" />
                                    <p>8</p>
                                </th>
                                <th>
                                    <img width="300px" src="imgsrc/IMG009.jpg" alt="IMG009" />
                                    <p>9</p>
                                </th>
                            </tr>
                        </table>
                        </table>
                        </table>
    </>

  )
}

export default Gallery
