import { Card, CardContent } from "../components/ui/Card";
import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "Resource 1",
      description: "Description of resource 1.",
      link: "https://example.com/resource1",
    },
    {
      title: "Resource 2",
      description: "Description of resource 2.",
      link: "https://example.com/resource2",
    },
    {
      title: "Resource 3",
      description: "Description of resource 3.",
      link: "https://example.com/resource3",
    },
  ];

  return (
    <Card className="p-6 max-w-2xl mx-auto shadow-md">
      <CardContent>
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Resources
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Here are some useful resources to help you learn more.
        </p>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {resource.title}
              </h2>
              <p className="text-gray-600">{resource.description}</p>
              <a
                href={resource.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Resources;
