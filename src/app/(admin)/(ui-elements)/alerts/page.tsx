import React from "react";
import { Metadata } from "next";
import { Alert, AlertGroup, AlertIcon, AlertDescription, AlertTitle } from '@/components/ui/alert/alert';
import ComponentCard from '@/components/ui/common/ComponentCard'
import PageBreadcrumb from '@/components/ui/common/PageBreadCrumb'


export const metadata: Metadata = {
  title: "Next.js Alerts | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Alerts page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Alerts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Alerts" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Success Alert">
          <Alert variant='success'>
            <AlertGroup>
            <AlertIcon variant='success' />
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              Please be carefull, this operation can not be rolled back.
            </AlertDescription>
            </AlertGroup>
          </Alert>
          <Alert variant="success">
            <AlertGroup>
            <AlertIcon variant='success' />
            <AlertTitle>Success Message</AlertTitle>
            <AlertDescription>
              Be cautious when performing this action.
            </AlertDescription>
            </AlertGroup>
          </Alert>
        </ComponentCard>
        <ComponentCard title="Warning Alert">
          <Alert variant="warning">
            <AlertGroup>
              <AlertIcon variant='warning' />
              <AlertIcon variant='warning' />
              <AlertTitle>Warning!</AlertTitle>
              <AlertDescription>
                Please be carefull, this operation can not be rolled back.
              </AlertDescription>
            </AlertGroup>
          </Alert>
          <Alert variant="warning">
            <AlertGroup>
              <AlertIcon variant='warning' />
              <AlertTitle>Success Message</AlertTitle>
              <AlertDescription>
                Be cautious when performing this action.
              </AlertDescription>
            </AlertGroup>
          </Alert>
        </ComponentCard>{" "}
        <ComponentCard title="Error Alert">
          <Alert variant="error">
            <AlertGroup>
              <AlertIcon variant='error' />
              <AlertTitle>Warning!</AlertTitle>
              <AlertDescription>
                Please be carefull, this operation can not be rolled back.
              </AlertDescription>
            </AlertGroup>
          </Alert>
          <Alert variant="error">
            <AlertGroup>
              <AlertIcon variant='error' />
              <AlertTitle>Success Message</AlertTitle>
              <AlertDescription>
                Be cautious when performing this action.
              </AlertDescription>
            </AlertGroup>
          </Alert>
        </ComponentCard>{" "}
        <ComponentCard title="Info Alert">
          <Alert variant="info">
            <AlertGroup>
              <AlertIcon variant='info' />
              <AlertTitle>Warning!</AlertTitle>
              <AlertDescription>
                Please be carefull, this operation can not be rolled back.
              </AlertDescription>
            </AlertGroup>
          </Alert>
          <Alert variant="info">
            <AlertGroup>
              <AlertIcon variant='info' />
              <AlertTitle>Success Message</AlertTitle>
              <AlertDescription>
                Be cautious when performing this action.
              </AlertDescription>
            </AlertGroup>
          </Alert>
        </ComponentCard>
      </div>
    </div>
  );
}