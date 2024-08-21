import React, { useState } from 'react';
import { Card, Input, Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons'; 
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 

const { Title } = Typography;

const TodoCard = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteClick = (index) => {
    const newTasks = tasks.filter((taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };


  return (
    <div>
      <Card
        title={
          <div style={{ padding:'25px',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Title level={2} style={{ margin: 0 , color: '#ff9c6e' }}>To-Do List</Title>
          </div>
        }
        style={{ width: 700, height: 700, backgroundColor: '#703656', color: '#fff', borderColor: '#ff9c6e' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new to do..."
            style={{ flex: 1, padding: '20px', marginRight: '10px' }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddClick}
            style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '4px', padding: '25px' }}
          />
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 , maxHeight: '475px', overflow: 'auto' }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                rowGap: '10px',
                backgroundColor: '#fff',
                color: '#000',
                padding: '6px',
                borderBottom: '1px solid #ddd',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{task}</span>
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteClick(index)}
                style={{ color: 'red' }}
              />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TodoCard;
