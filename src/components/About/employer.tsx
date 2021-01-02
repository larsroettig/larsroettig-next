import React from 'react';

const employerList = [
  {
    company_name: `TechDivision GmbH`,
    title: `Senior Software Engineer E-Commerce`,
    tech_stack: `Magento 2, PHP, React, JavaScript`,
    start_date: `2020-09`,
    end_date: `now`,
  },
  {
    company_name: `TechDivision GmbH`,
    title: `Software Engineer E-Commerce`,
    tech_stack: `Magento 2, PHP, React, JavaScript`,
    start_date: `2015-09`,
    end_date: `2020-08`,
  },
  {
    company_name: `TechDivision GmbH`,
    title: `Junior Software Engineer`,
    tech_stack: `PHP, Magento`,
    start_date: `2013-09`,
    end_date: `2015-08`,
  },
  {
    company_name: `SportIdent GmbH`,
    title: `Training as IT specialist for application development`,
    tech_stack: `PHP, C#, C++`,
    start_date: `2010`,
    end_date: `2013`,
  },
];

const Employer: React.FC = () => {
  const employerElements = [...employerList].map((employer) => {
    const key = `${employer.company_name}--${employer.start_date}`;
    return (
      <div
        key={key}
        className="grid gap-4"
        style={{ gridTemplateColumns: `70% 30%` }}
      >
        <div>
          <div className="font-light ">{employer.company_name}</div>
          <div className="py-1">{employer.title}</div>
          <div className="py-1 opacity-85 font-mono">
            <b>Tech stack:</b> {employer.tech_stack}
          </div>
        </div>
        <div>
          <span className="opacity-80">
            {employer.start_date} - {employer.end_date}
          </span>
        </div>
      </div>
    );
  });

  return <div className="grid gap-4">{employerElements}</div>;
};

export default Employer;
