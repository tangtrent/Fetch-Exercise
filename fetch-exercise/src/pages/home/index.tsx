import DataTable from "react-data-table-component";
import { Col, Input, Label, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { Dog } from "../../../models/Dog";
import {map, filter} from 'lodash';
import { useEffect, useState } from "react";

const mockData = [
  {
    id: '0',
    img: '',
    name: 'Rex',
    age: 10,
    zip_code: '',
    breed: 'Pomeranian'
  },
  {
    id: '1',
    img: '',
    name: 'Invincible',
    age: 10,
    zip_code: '',
    breed: 'Huskie'
  },
  {
    id: '2',
    img: '',
    name: 'Atom Eve',
    age: 10,
    zip_code: '',
    breed: 'Maltipoo'
  },
  {
    id: '3',
    img: '',
    name: 'Robot',
    age: 10,
    zip_code: '',
    breed: 'Shiba Inu'
  },
]

const mockColumns = [
  {
    selector: (row: Dog) => row.img,
    name: 'Image',
    id: 0
  },
  {
    selector: (row: Dog) => row.name,
    name: 'Name',
    id: 1
  },
  {
    selector: (row: Dog) => row.age,
    name: 'Age',
    id: 2
  },
  {
    selector: (row: Dog) => row.zip_code,
    name: 'Zip Code',
    id: 3
  },
  {
    selector: (row: Dog) => row.breed,
    name: 'Breed',
    sortable: true,
    id: 4
  },
]

const Home = () => {
  const [data, setData] = useState(mockData)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [])

  const onChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'All') {
      setData(mockData);
    } else {
      const filteredData = filter(mockData, ['breed', selectedOption]);
      setData(filteredData);
    }
  }

  return (
    <div className="mx-5">
      <Row className="my-5">
        <Col md={3}>
          <Input type="select" onChange={onChange}>
            <option>All</option>
            {map(mockData, (data: Dog) => {
              return <option>{data?.breed}</option>
            })}
          </Input>
        </Col>
      </Row>
      <div>
        {
          loading ? <>loading</> :
          <DataTable
            data={data}
            defaultSortAsc
            defaultSortFieldId={4}
            columns={mockColumns}
            pagination
            striped
          />
        }
      </div>
    </div>
  )
}

export default Home;