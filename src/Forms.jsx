import axios from "axios";
import { useState, useEffect } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        marital: "",
    });
    const [getFormData, setGFormData] = useState([])


    const getData = () => {
        axios.get("http://localhost:3005/users").then((res) => {
            setGFormData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])






    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3005/users", formData)
            .then(() => {
                alert("user registered sucessfully");
                getData()

                setFormData({
                    name: "",
                    age: "",
                    address: "",
                    department: "",
                    marital: "",
                })
            })
    }
    console.log("g", getFormData)
    return <>
        <form onSubmit={handleSubmit}>
            <h1>EMPLOYEE DETAILS</h1>
            <input
                value={formData.name}
                id="name"
                type="text"
                onChange={handleChange}
                placeholder="Enter name"
            />
            <input
                value={formData.age}
                id="age"
                type="number"
                onChange={handleChange}
                placeholder="your age is"
            />
            <input
                value={formData.address}
                id="address"
                type="text"
                onChange={handleChange}
                placeholder="ADDRESS"
            />
            <input
                value={formData.department}
                id="department"
                type="text"
                onChange={handleChange}
                placeholder="DEPARTMENT"
            />
            <input
                value={formData.marital}
                id="marital"
                type="text"
                onChange={handleChange}
                placeholder="Marital status"
            />
            <input type="submit" value="Submit your data" />
        </form>
        {/* <h1>Welcome</h1> */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>


                    <th>Address</th>
                    <th>Department</th>
                    <th>Maritial</th>

                </tr>

            </thead>

            {getFormData.map((elem) =>

                <tbody>
                    <tr>
                        <td>{elem.name}</td>
                        <td>{elem.address}</td>
                        <td>{elem.department}</td>
                        <td>{elem.marital}</td>

                    </tr>


                </tbody>

            )
            }
        </table>
        {/* <table>
            <thead>
                <tr>Name</tr>
            </thead>
            <tbody>
                <tr><td>{getFormData.name}</td></tr>
            </tbody>
        </table> */}


    </>
}