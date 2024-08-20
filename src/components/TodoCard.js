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
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };


  return (
    <div>
      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Title level={2} style={{ margin: 0 , color: '#ff9c6e' }}>To-Do List</Title>
          </div>
        }
        style={{ width: 700, height: 700, backgroundColor: '#b5f5ec', color: '#fff', borderColor: '#ff9c6e' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Yeni görev ekle..."
            style={{ flex: 1, padding: '6px', marginRight: '10px' }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddClick}
            style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '4px', padding: '0 15px' }}
          />
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
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

