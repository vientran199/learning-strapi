/*
 *
 * HomePage
 *
 */

import React,{useState,useEffect} from 'react';
import { LoadingIndicatorPage} from '@strapi/helper-plugin'
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout
} from '@strapi/design-system/Layout'
import {EmptyStateLayout,Button} from '@strapi/design-system'
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import TodoModal from '../../components/TodoModal';

import TodoCount from '../../components/TodoCount';
import TodoTable from '../../components/TodoTable';
import { todoRequest } from '../../api/todo';

const HomePage = () => {
  const [todoData,setTodoData] = useState([])
  const [showModal,setShowModal]= useState(false)
  const [isLoading,setIsLoading] = useState(true)

  const fetchdata = async ()=>{
    if(isLoading === false) setIsLoading(true)

    const todo = await todoRequest.getAllTodos()
    setTodoData(todo)
    setIsLoading(false)
  }

  useEffect(async()=>{
    await fetchdata()
  },[])

  async function addTodo(data){
    await todoRequest.createTodo(data)
    await fetchdata()
  }

  async function toggleTodo(data) {
    await todoRequest.toggelTodo(data.id)
    await fetchdata()
  }

  async function deleteTodo(data) {
    await todoRequest.deleteTodo(data.id)
    await fetchdata()
  }

  async function editTodo(id, data) {
    await todoRequest.editTodo(id,data)
    await fetchdata()
  }
  if(isLoading) return <LoadingIndicatorPage/>
  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place"
        as="h2"
      />
      <ContentLayout>
        {
          todoData.length === 0 ? (
            <EmptyStateLayout 
              content="You dont have any todos yet..."
              action={
                <Button
                  onClick={()=>setShowModal(true)}
                  variant="secondary"
                >
                  Add your first todo
                </Button>
              }
            />
          ): (
           <>
            <TodoCount count={todoData.length}/>
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
           </>
          )
        }
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo}/>}
    </Layout>
  );
};

export default HomePage;
