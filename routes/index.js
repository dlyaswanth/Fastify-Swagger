const controllers = require("../controllers");
async function routes(fastify, options) {
    // get all details in the database
    fastify.get(
        "/alldetails",
        {
            schema: {
                tags: ['Routes']
            },
        },
        async (req, res) => controllers.allDetails(req, res, fastify)
    );
    // get details by user id
    fastify.get(
        "/:id/details",
        {
            schema: {
                tags: ['Routes'],
                params: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                        }
                    }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            total: {
                                type: 'number',
                            },
                            response: {
                                type: 'array',
                            },
                            status: {
                                type: 'boolean',
                                default: true
                            }
                        }
                    },
                    500: {
                        type: 'object',
                        properties: {
                            error: {
                                type: 'object',
                            },
                            status: {
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            },
        },
        async (req, res) => controllers.allDetailsById(req, res, fastify)
    );
    // add user details 
    fastify.post(
        "/add",
        {
            schema: {
                tags: ['Routes'],
                body: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                        },
                        phone: {
                            type: 'number',
                        },
                        gender: {
                            type: 'string',
                        },
                        job_type: {
                            type: 'string',
                        }
                    }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'Details Added Successfully'
                            },
                            status: {
                                type: 'boolean',
                                default: true
                            }
                        }
                    },
                    500: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'Something went wrong'
                            },
                            status: {
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            },
        },
        async (req, res) => controllers.addUser(req, res, fastify)
    );
    // update details by user id
    fastify.put(
        "/:id/details",
        {
            schema: {
                tags: ['Routes'],
                params: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                        }
                    }
                },
                body: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                        },
                        phone: {
                            type: 'number',
                        },
                        gender: {
                            type: 'string',
                        },
                        job_type: {
                            type: 'string',
                        }
                    }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'Details Updated Successfully'
                            },
                            status: {
                                type: 'boolean'
                            }
                        }
                    },
                    500: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'Something went wrong'
                            },
                            status: {
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            },
        },
        async (req, res) => controllers.updateDetailsById(req, res, fastify)
    );
    fastify.delete(
        "/:id",
        {
            schema: {
                tags: ['Routes'],
                params: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                        }
                    }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'User deleted Successfully'
                            },
                            status: {
                                type: 'boolean',
                                default: false
                            }
                        }
                    },
                    500: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                default: 'Something went wrong'
                            },
                            status: {
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            },
        },
        async (req, res) => controllers.deleteUserById(req, res, fastify)
    );
}
module.exports = routes;