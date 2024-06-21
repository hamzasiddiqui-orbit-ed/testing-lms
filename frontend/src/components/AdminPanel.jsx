import React from "react";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

function AdminPanel() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center !bg-white",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <div
      className="fixed left-0 top-0 bottom-0 p-2 w-64 flex flex-col h-screen justify-between items-center pt-20"
      style={{
        backgroundColor: "#D3DBDF",
      }}
    >
      <Accordion
        showDivider={false}
        className="p-2 flex flex-col gap-1 w-full max-w-[300px]"
        variant="shadow"
        itemClasses={itemClasses}
        selectionMode="multiple"
      >
        <AccordionItem key="1" aria-label="My Dashboard" title="My Dashboard">
          <div className="flex flex-col pl-4">
            <Link href="">Analytics</Link>
            <Link href="">Reports</Link>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Manager Dashboard"
          title="Manager Dashboard"
        >
          <div className="flex flex-col pl-4">
            <Link href="">Analytics</Link>
            <Link href="">Reports</Link>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Learner Dashboard"
          title="Learner Dashboard"
        >
          <div className="flex flex-col pl-4">
            <Link href="">Analytics</Link>
            <Link href="">Reports</Link>
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Course Management"
          title="Course Management"
        >
          <div className="flex flex-col pl-4">
            <Link href="">Current Courses</Link>
            <Link href="">Create Course</Link>
          </div>
        </AccordionItem>
      </Accordion>
      <Button size="md" className="bottom-0 w-full text-left bg-white">
        FAQs
      </Button>
    </div>
  );
}

export default AdminPanel;
