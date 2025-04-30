const Doctor = require('../models/Doctor');

exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listDoctors = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const filters = {};
    if (req.query.specialization) {
      filters.specialization = req.query.specialization;
    }
    if (req.query.location) {
      filters.location = req.query.location;
    }
    if (req.query.experience) {
      filters.experience = { $gte: parseInt(req.query.experience) };
    }

    const doctors = await Doctor.find(filters)
      .skip(skip)
      .limit(limit);

    const total = await Doctor.countDocuments(filters);

    res.json({
      doctors,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};