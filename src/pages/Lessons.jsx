import { Card, CardContent } from "../components/ui/Card";
import React from "react";

const Lesson = () => {
  return (
    <Card className="p-6 max-w-2xl mx-auto shadow-md">
      <CardContent>
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Lesson Title
        </h1>
        <p className="text-gray-600 text-center mb-6">
          This is a brief description of the lesson. It provides an overview of
          what will be covered in this lesson.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Introduction
            </h2>
            <p className="text-gray-600">
              The introduction section provides a brief overview of the lesson
              content and objectives. It sets the stage for what students will
              learn.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Main Content
            </h2>
            <p className="text-gray-600">
              The main content section contains the core material of the lesson.
              This can include text, images, videos, and other multimedia
              elements to help students understand the topic.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
            <p className="text-gray-600">
              The conclusion section summarizes the key points of the lesson and
              provides any final thoughts or takeaways. It may also include
              questions or activities for students to complete.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Lesson;
