"use client"
import React from 'react'
import { NotionAPI } from 'notion-client'
import NotionRenderer from '@/components/NotionRenderer'


const CourseContent = async ({recordMap}:{recordMap: any}) => {
    const notion = new NotionAPI()
    const docId = await notion.getPage(recordMap)
  return (
    <div><NotionRenderer recordMap={docId} /></div>
  )
}

export default CourseContent