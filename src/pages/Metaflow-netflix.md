---
# Example: src/pages/page.md
layout: '../layouts/Blog.astro'

title: "Metaflow by Netflix"
subtitle: "Netflix open-sourced Metaflow on 2nd December 2019. Metaflow is a platform for running data science workflows locally or in the cloud."
imageSrc: "images/Metaflow-netflix.png"
author: "Thomas Ridings"
authorImageSrc: "images/ThomasRidingsAuthor.jpg"
date: "17 December 2019"
dateNum: 20191217
tag1: "Digital"
url: "./Metaflow-netflix"
---



Netflix open-sourced Metaflow on 2nd December 2019 ([https://github.com/Netflix/metaflow](https://github.com/Netflix/metaflow)).

## Problem statement

A model can be prototyped locally using a wide variety of tools and libraries. Deploying it to production and managing it once deployed, requires the use of complex infrastructure and orchestration tools. Models therefore take a long time to deploy to production and are difficult to manage once they're there.

## Solution

A platform for running data science workflows that can run locally or in the cloud. When executing on the cloud the infrastructure automation is handled by the platform providing auto-scaling without having to change data-science code.

The platform also provides some useful tooling for data scientists to analyse and debug their model execution. Each step of each run of a workflow stores a snapshot of the data used, allowing the user to replay, resume and debug previous runs.

The platform is initiaited from the terminal. There is no UI available to view runs or statuses. Metaflow instead provides clean logging in the terminal to examine run-time status and identify issues. It also provides an API to explore the results of workflow executions. This API is intended to be used within Notebooks to create dashboards and visualise the results. This API can also be used to get the final output of a workflow which can be a dataset or a trained model.

## How

Decorators are added to your existing code in Jupyter notebook to create a workflow (DAG). An example workflow below and the code used to generate it.

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2Fmetaflow%2F-LpjN0yp7r49JRnXCA_5%2F-LpjrytvvUYUbHJminpA%2Fgraph_branch.png?generation=1569540029515895&alt=media)

```python
from metaflow import FlowSpec, step

class PetsFlow(FlowSpec):
  
    @step
    def start(self):
        self.next(self.a, self.b)
    
    @step
    def a(self):
        self.pets = ['dogs', 'cats', 'budgies']
        self.next(self.join)
    
    @step
    def b(self):
        self.pets = ['lions', 'wolves', 'elephants']
        self.next(self.join)
    
    @step
    def join(self, inputs):
        print('Good pets (a) are %s' % ', '.join(inputs.a.pets))
        print('Bad pets (b) are %s' % ', '.join(inputs.b.pets))
        self.pets = inputs.a.pets + inputs.b.pets
        print('total of %d pets' % len(self.pets)) # returns 6
        
        self.next(self.end)
    
    @step
    def end(self):
        pass

if __name__ == '__main__':
    PetsFlow()

```

The workflow can be executed using  `python petsflow.py run`.

![MEtaflow runtime logs](https://i.imgur.com/P4MZDZA.png)

Parallelisation is handled when we define the next step, for example the following will create a parallelal execution step for each pet;

`self.next(self.compute_pet_stats, foreach='pets')`

To improve debugging each step of each execution is persisted along with any associated data. Users can debug, resume and inpsect all previous runs using a python API;

```python
from metaflow import Flow
run = Flow('PetsFlow').latest_successful_run
pets = run.data.pets

```

![Jupyter notebook execution](https://i.imgur.com/0cbGBU2.png)

When switching to AWS backed service the following tools are used;

-   S3 as a Datastore
-   Batch for Compute
-   Sagemaker Notebook as a Notebook

## Supporting Documentation

[https://medium.com/netflix-techblog/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9](https://medium.com/netflix-techblog/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9)

[https://metaflow.org/](https://metaflow.org/)

[https://github.com/Netflix/metaflow](https://github.com/Netflix/metaflow)

[https://www.youtube.com/watch?v=XV5VGddmP24](https://www.youtube.com/watch?v=XV5VGddmP24)